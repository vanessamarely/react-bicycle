import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Geolocation from "./../components/Geolocation/Geolocation";
import useFetch from "./../hooks/useFetch";
import { urlGetAllRents } from "./../utils/services";

const Admin = () => {
    const { response, isLoading, error } = useFetch(urlGetAllRents);
    return (
        <div className="w-full p-2">
            <h1 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Todos los alquileres
            </h1>
            <div className="flex flex-wrap">

                {response?.map((rent) => (
                    <div
                        key={rent.rentId}
                        className="max-w-sm p-2 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                        <button
                            type="button"
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

                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Bicycle ID: {rent.bicycleId}
                            </h5>

                            <p>Rent Date: {rent.rentDate}</p>
                            <p>Return Date: {rent.returnDate}</p>
                            <p>Status: {rent.status}</p>
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Admin;