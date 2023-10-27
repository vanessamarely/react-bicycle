import usePostData from "./../hooks/usePostData.jsx";
import { useContext, useEffect, useState } from "react";
import UserContext from "./../store/UserContext.jsx";
import { urlCreateRent, urlGetAllBikes } from "./../utils/services.js";
import { Link } from "react-router-dom";
import useFetch from "./../hooks/useFetch";

const initialData = {
  bicycleId: 1,
  userId: 1,
  rentDate: "2021-06-01",
  returnDate: "2021-06-02",
  status: "Returned",
  geolocation: {
    latitude: 0,
    longitude: 0,
  },
};

const initialGeolocationData = {
  latitude: 0,
  longitude: 0,
};

const RentBicycle = () => {
  const [rentData, setRentData] = useState(null);
  const [geolocation, setGeolocationData] = useState(initialGeolocationData);
  const { user } = useContext(UserContext);
  const { data, isLoading, error, postData } = usePostData(urlCreateRent);
  const { response: bikes } = useFetch(urlGetAllBikes);

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeolocationData({
        ...geolocation,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      bicycleId: rentData?.bicycleId,
      userId: user?.id,
      rentDate: rentData?.rentDate,
      returnDate: rentData?.returnDate,
      status: "Rented",
      geolocation,
    };
    postData(payload);
  };

  useEffect(() => {
    handleLocation();
  }, []);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="block py-2 pl-3 pr-4 text-indigo-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-indigo-500 md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-indigo-500 md:dark:hover:bg-transparent dark:border-gray-700">
        <Link to="/home/rent">Ver todas las Reservas</Link>
      </div>
      <div className="flex justify-center sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Rentar una Bicicleta
        </h2>
      </div>
      {data && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <div>{data && <div>{data?.message}</div>}</div>
        </div>
      )}
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <div>{error?.message}</div>
        </div>
      )}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="InputIdBicycle"
              >
                ID Bicicleta
              </label>

              <select
                onChange={(e) =>
                  setRentData({ ...rentData, bicycleId: e.target?.value })
                }
                id="InputIdBicycle"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Seleccione una bicicleta</option>
                {bikes?.filter((bicycle) => bicycle.status === "Available").map((bicycle, index) => (
                  <option key={index} value={bicycle._id}>
                    {bicycle.brand}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="InputIdUser"
            >
              ID Usuario
            </label>
            {user?.email}
          </div>
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="InputDateRent"
            >
              Fecha de renta
            </label>
            <input
              type="date"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="InputDateRent"
              // value={rentData?.rentDate}
              onChange={(e) =>
                setRentData({ ...rentData, rentDate: e.target.value })
              }
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="InputReturnDate"
            >
              Fecha de entrega
            </label>
            <input
              type="date"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="InputReturnDate"
              // value={rentData?.returnDate}
              onChange={(e) =>
                setRentData({ ...rentData, returnDate: e.target.value })
              }
            />
          </div>
          {/* <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="InputStatus"
            >
              Estado
            </label>

            <select
              onSelect={(e) =>
                setRentData({ ...rentData, status: e.target.value })
              }
              id="InputStatus"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Seleccione un Estado</option>
              <option value="Available">Available</option>
              <option value="Returned">Returned</option>
              <option value="Rented">Rented</option>
            </select>
          </div> */}
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="InputLocation"
            >
              Ubicacion
            </label>
            <div className="flex justify-between gap-2">
              <input
                type="text"
                className="block w-1/2 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="InputLocation"
                placeholder="Latitud"
                value={geolocation?.latitude}
                onChange={(e) =>
                  setGeolocationData({
                    ...geolocation,
                    latitude: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="block w-1/2 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="InputLocation"
                placeholder="Longitud"
                value={geolocation?.longitude}
                onChange={(e) =>
                  setGeolocationData({
                    ...geolocation,
                    longitude: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RentBicycle;
