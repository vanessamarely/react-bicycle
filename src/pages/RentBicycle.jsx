import { useState } from "react";
import { Link } from "react-router-dom";

const test = {
  id: 1,
  bicycleId: 1,
  userId: 1,
  rentDate: "2021-06-01",
  returnDate: "2021-06-02",
  status: "Returned",
  geolocation: {
    latitude: 6.25184,
    longitude: -75.56359,
  },
};

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
const RentBicycle = () => {
  const [data, setData] = useState(initialData);

  const handleCreate = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Rentar una Bicicleta
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="InputIdBicycle"
            >
              ID Bicicleta
            </label>
            <input
              type="text"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="InputIdBicycle"
              placeholder="ID Bicicleta"
              value={data.bicycleId}
              onChange={(e) => setData({ ...data, bicycleId: e.target.value })}
            ></input>
          </div>
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="InputIdUser"
            >
              ID Usuario
            </label>
            <input
              type="text"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="InputIdUser"
              placeholder="ID Usuario"
              value={data.userId}
              onChange={(e) => setData({ ...data, userId: e.target.value })}
            ></input>
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
              value={data.rentDate}
              onChange={(e) => setData({ ...data, rentDate: e.target.value })}
            ></input>
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
              value={data.returnDate}
              onChange={(e) => setData({ ...data, returnDate: e.target.value })}
            ></input>
          </div>
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="InputStatus"
            >
              Estado
            </label>
            <input
              type="text"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="InputStatus"
              placeholder="Estado"
              value={data.status}
              onChange={(e) => setData({ ...data, status: e.target.value })}
            ></input>
          </div>
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
                value={data.geolocation.latitude}
                onChange={(e) =>
                  setData({
                    ...data,
                    geolocation: { latitude: e.target.value },
                  })
                }
              ></input>
              <input
                type="text"
                className="block w-1/2 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="InputLocation"
                placeholder="Longitud"
                value={data.geolocation.longitude}
                onChange={(e) =>
                  setData({
                    ...data,
                    geolocation: { longitude: e.target.value },
                  })
                }
              ></input>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={(e) => handleCreate(e)}
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
