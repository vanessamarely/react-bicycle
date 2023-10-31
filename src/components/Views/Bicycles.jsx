import { useState } from "react";
import CreateBicycle from "./../Create/CreateBicycle";
import Card from "./../Card/Card";
import {
  urlGetAllBikes,
  urlGetAllBikesService,
  urlBicycleBridge,
  urlBicycleService,
} from "./../../utils/services";
import useFetch from "./../../hooks/useFetch";
import useDelete from "./../../hooks/useDelete";

const ViewBicycle = () => {
  const [showCreateBicycle, setShowCreateBicycle] = useState(false);
  const { response: bikes } = useFetch(urlGetAllBikes, urlGetAllBikesService);
  const [dataType, setDataType] = useState(null);
  const handleSetBicycleForm = (e) => {
    setShowCreateBicycle(e);
    setDataType(null);
  };
  const { dataDelete, errorDelete, deleteData } = useDelete(
    urlBicycleBridge,
    urlBicycleService
  );
  const handleEditBicycle = (e) => {
    setShowCreateBicycle(e);
    setDataType(e);
  };

  const handleDeleteBicycle = (e) => {
    deleteData({ bicycleId: e.bicycleId });
  };

  return (
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
          {showCreateBicycle ? "Ver todas las Bicicletas" : "Crear Bicicleta"}
        </button>
      </div>
      {showCreateBicycle ? (
        <CreateBicycle
          setBicycleForm={(e) => handleSetBicycleForm(e)}
          dataType={dataType}
        />
      ) : (
        <div className="flex flex-wrap gap-2 ">
          {bikes?.map((bicycle) => (
            <div
              key={bicycle?.bicycleId}
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
  );
};
export default ViewBicycle;
