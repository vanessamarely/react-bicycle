import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Geolocation from "./../components/Geolocation/Geolocation";

const Rent = () => {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false);
  const [location, setLocation] = useState({ lat: 0, long: 0 });

  const handleLocation = (lat, long) => {
    setLocation({ lat, long });
  };

  const handleIsSelected = (selected) => {
    console.log(selected);
    setIsSelected(!isSelected);
    handleLocation(
      selected.geolocation.latitude,
      selected.geolocation.longitude
    );
  };

  const rents = [
    {
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
    },
  ];
  return (
    <div className="w-full p-2">
      <h1 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Rents
      </h1>
      <button
        type="button"
        className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => navigate("/home/rent-create")}
      >
        Rentar Bicicleta
      </button>

      <div className="flex flex-wrap gap-2 justify-around">
        {!isSelected ? (
          <div>
            {rents.map((rent) => (
              <div
                key={rent.id}
                className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div
                  onClick={() => handleIsSelected(rent)}
                  className="block py-2 pl-3 pr-4 text-indigo-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-indigo-500 md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-indigo-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 20"
                  >
                    <path d="M7 0a7 7 0 0 0-1 13.92V19a1 1 0 1 0 2 0v-5.08A7 7 0 0 0 7 0Zm0 5.5A1.5 1.5 0 0 0 5.5 7a1 1 0 0 1-2 0A3.5 3.5 0 0 1 7 3.5a1 1 0 0 1 0 2Z" />
                  </svg>
                </div>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Bicycle ID: {rent.bicycleId}
                </h5>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  User ID: {rent.userId}
                </p>
                <p>Rent Date: {rent.rentDate}</p>
                <p>Return Date: {rent.returnDate}</p>
                <p>Status: {rent.status}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <button
              className="mb-2 flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => setIsSelected(!isSelected)}
            >
              Volver
            </button>
            <Geolocation lat={location.lat} long={location.long} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Rent;
