import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import useFetch from "./../hooks/useFetch";
import {
  urlGetAllRents,
  urlGetAllRentsService,
  urlGetAllCER,
  urlGetAllBikes,
  urlGetAllCERService,
  urlGetAllBikesService,
  urlBicycleBridge,
  urlBicycleService,
} from "./../utils/services";
import useDelete from "./../hooks/useDelete";
import CreateEvent from "./../components/Create/CreateEvent";
import CreateBicycle from "./../components/Create/CreateBicycle";

const Admin = () => {
  const { response: rentData, error } = useFetch(
    urlGetAllRents,
    urlGetAllRentsService
  );
  const { dataDelete, errorDelete, deleteData } = useDelete(
    urlBicycleBridge,
    urlBicycleService
  );
  const {
    dataDelete: dataDeleteERC,
    errorDelete: errorDeleteERC,
    deleteData: deleteDataERC,
  } = useDelete(urlGetAllCER, urlGetAllCERService);

  const { response: eventsData } = useFetch(urlGetAllCER, urlGetAllCERService);
  const { response: bikes } = useFetch(urlGetAllBikes, urlGetAllBikesService);
  const [optionSelected, setOptionSelected] = useState("rent");
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [showCreateBicycle, setShowCreateBicycle] = useState(false);
  const [dataType, setDataType] = useState(null);
  const [dataTypeERC, setDataTypeERC] = useState(null);

  const handleSetBicycleForm = (e) => {
    setShowCreateBicycle(e);
    setDataType(null);
  };

  const handleSetBicycleFormECR = (e) => {
    setShowCreateEvent(e);
    setDataTypeERC(null);
  };

  const handleEditBicycle = (e) => {
    setShowCreateBicycle(e);
    setDataType(e);
  };

  const handleDeleteBicycle = (e) => {
    deleteData({ bicycleId: e.bicycleId });
  };

  const handleEditERC = (e) => {
    console.log(e);
    setShowCreateEvent(e);
    setDataTypeERC(e);
  };

  const handleDeleteERC = (e) => {
    deleteDataERC({ eventId: e.eventId });
  };

  return (
    <div className="w-full p-2">
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg"
              id="rent-tab"
              data-tabs-target="#rent"
              type="button"
              role="tab"
              aria-controls="rent"
              aria-selected="false"
              onClick={() => setOptionSelected("rent")}
            >
              <span
                className={
                  optionSelected === "rent" ? "text-blue-700" : "text-blue-950"
                }
              >
                Reservas
              </span>
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="bikes-tab"
              data-tabs-target="#bikes"
              type="button"
              role="tab"
              aria-controls="bikes"
              aria-selected="false"
              onClick={() => setOptionSelected("bikes")}
            >
              <span
                className={
                  optionSelected === "bikes" ? "text-blue-700" : "text-blue-950"
                }
              >
                Bicicletas
              </span>
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="events-tab"
              data-tabs-target="#events"
              type="button"
              role="tab"
              aria-controls="events"
              aria-selected="false"
              onClick={() => setOptionSelected("events")}
            >
              <span
                className={
                  optionSelected === "events"
                    ? "text-blue-700"
                    : "text-blue-950"
                }
              >
                Eventos/Rutas/Competencias
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        {dataDelete ||
          (dataDeleteERC && (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <div>Borrada!</div>
            </div>
          ))}
        {errorDelete ||
          (errorDeleteERC && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <p>
                {errorDeleteERC ||
                  (errorDeleteERC &&
                    "Ha ocurrido un error borrando...")}
              </p>
            </div>
          ))}
        {optionSelected === "rent" && (
          <div
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="rent"
            role="tabpanel"
            aria-labelledby="rent-tab"
          >
            <h1 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Todas las reservas
            </h1>
            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <p>{error?.message}</p>
              </div>
            )}
            <div className="flex flex-wrap w-full h-96 overflow-y-auto">
              {rentData?.map((rent) => (
                <div
                  key={rent?.rentId}
                  className="max-w-sm p-2 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="block py-2 pl-3 pr-4 text-indigo-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-indigo-500 md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-indigo-500 md:dark:hover:bg-transparent dark:border-gray-700">
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
                      Bicycle ID: {rent?.bicycleId}
                    </h5>

                    <p>Rent Date: {rent?.rentDate}</p>
                    <p>Return Date: {rent?.returnDate}</p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {optionSelected === "bikes" && (
          <div
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="bikes"
            role="tabpanel"
            aria-labelledby="bikes-tab"
          >
            <h1 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Bicicletas
            </h1>
            <div className="mb-12">
              <button
                onClick={() => setShowCreateBicycle(!showCreateBicycle)}
                className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                {showCreateBicycle
                  ? "Ver todas las Bicicletas"
                  : "Crear Bicicleta"}
              </button>
            </div>
            {showCreateBicycle ? (
              <CreateBicycle
                setBicycleForm={(e) => handleSetBicycleForm(e)}
                dataType={dataType}
              />
            ) : (
              <div className="flex flex-wrap gap-2 ">
                {bikes?.map((bicycle, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg shadow "
                  >
                    <div>
                      <button
                        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 m-2"
                        onClick={() => handleEditBicycle(bicycle)}
                      >
                        Editar
                      </button>
                      {bicycle?.status === "Available" && (
                        <button
                          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600m-2"
                          onClick={() => handleDeleteBicycle(bicycle)}
                        >
                          Eliminar
                        </button>
                      )}
                    </div>
                    <Card
                      status={bicycle?.status}
                      title={bicycle?.brand}
                      img={bicycle?.image}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {optionSelected === "events" && (
          <div
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="events"
            role="tabpanel"
            aria-labelledby="events-tab"
          >
            <h1 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              ERC (Eventos, Rutas o Competencias)
            </h1>
            <div className="mb-2">
              <button
                onClick={() => setShowCreateEvent(!showCreateEvent)}
                className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                {showCreateEvent ? "Ver todas las ERC" : "Crear ERC"}
              </button>
            </div>
            {showCreateEvent ? (
              <CreateEvent
                setECRForm={(e) => handleSetBicycleFormECR(e)}
                dataType={dataTypeERC}
              />
            ) : (
              <div className="flex flex-wrap gap-2">
                {eventsData?.map((event) => (
                  <div
                    key={event?._id}
                    className="max-w-sm p-2 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  >
                    <div>
                      <button
                        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 m-2"
                        onClick={() => handleEditERC(event)}
                      >
                        Editar
                      </button>
                      <button
                        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600m-2"
                        onClick={() => handleDeleteERC(event)}
                      >
                        Eliminar
                      </button>
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
                      Nombre:
                      {event?.name}
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
                      Descripcion: {event?.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
