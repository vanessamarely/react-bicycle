import { useState, useEffect } from "react";
import usePostData from "./../../hooks/usePostData";
import { urlBicycleBridge, urlBicycleService } from "./../../utils/services";
import usePatch from "./../../hooks/usePatch";

const initialData = {}

const CreateBicycle = ({ setBicycleForm, dataType = null }) => {
  const {
    data: response,
    isLoading: loading,
    error,
    postData,
  } = usePostData(urlBicycleBridge, urlBicycleService);

  const { responsePatch, isLoadingPatch, errorPatch, patchData } = usePatch(
    urlBicycleBridge,
    urlBicycleService
  );

  const [errorMessage, setErrorMessage] = useState(null);
  const [data, setData] = useState({
    brand: "",
    bicycleType: "",
    color: "",
    img: "https://source.unsplash.com/1600x900/?bicycle",
  });

  const handleCreate = async (e) => {
    e.preventDefault();

    if (data.brand === "" || data.bicycleType === "" || data.color === "") {
      setErrorMessage("Todos los campos son obligatorios");
    } else {
      if (dataType !== null) {
        setErrorMessage(null);
        const params = {
          bicycleId: dataType.bicycleId,
          brand: data.brand,
          bicycleType: data.bicycleType,
          color: data.color,
          img: data.img,
          status: dataType.status,
        };

        setErrorMessage(null);
        await patchData(params);
      } else {
        const payload = {
          brand: data.brand,
          bicycleType: data.bicycleType,
          color: data.color,
          img: data.img,
          status: "Available",
        };
        setErrorMessage(null);
        await postData(payload);
      }
    }
  };

  useEffect(() => {
    if (response) {
      setTimeout(() => {
        setBicycleForm(false);
        window.location.reload();
      }, 1000);
    }
  }, [response]);

  useEffect(() => {
    if (responsePatch) {
      setTimeout(() => {
        setBicycleForm(false);
        window.location.reload();
      }, 1000);
    }
  }, [responsePatch]);

  useEffect(() => {
    if (dataType) {
      setData({
        brand: dataType.brand,
        bicycleType: dataType.bicycleType,
        color: dataType.color,
        img: dataType.img,
      });
    }
  }, [dataType]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 sm:px-6 lg:px-2">
      <div className="max-w-md w-full space-y-8 bg-white p-5 rounded-md shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {dataType ? "Actualizar" : "Crear"} bicicleta
          </h2>
        </div>
        {response && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <div>
              {response ? (
                <div>{response.message ? response.message : "Creada!"}</div>
              ) : (
                <div>Bicicleta creada!</div>
              )}
            </div>
          </div>
        )}
        {error ||
          errorPatch ||
          (errorMessage && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <div>{error?.message || errorMessage}</div>
            </div>
          ))}
        <form className="mt-8 space-y-6" onSubmit={handleCreate}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="InputBrand"
              >
                Marca de la bicicleta
              </label>
              <input
                type="text"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="InputBrand"
                placeholder="Marca de la bicicleta"
                value={data.brand}
                onChange={(e) => setData({ ...data, brand: e.target.value })}
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="InputbicycleType"
              >
                Tipo de Bicicleta
              </label>
              <input
                type="text"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="InputbicycleType"
                placeholder="Tipo de Bicicleta"
                value={data.bicycleType}
                onChange={(e) =>
                  setData({
                    ...data,
                    bicycleType: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="InputColor"
              >
                Color
              </label>
              <input
                type="text"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="InputColor"
                value={data.color}
                onChange={(e) =>
                  setData({
                    ...data,
                    color: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="InputImage"
              >
                Url de la Imagen
              </label>
              <input
                type="text"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="InputImage"
                value={data.img}
                onChange={(e) =>
                  setData({
                    ...data,
                    img: e.target.value,
                  })
                }
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              onClick={handleCreate}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 00-1 1v4H5a1 1 0 100 2h4v4a1 1 0 102 0v-4h4a1 1 0 100-2h-4V4a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {loading || isLoadingPatch
                ? `${dataType ? "Actualizando..." : "Creando..."}`
                : `${dataType ? "Editar" : "Crear"}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateBicycle;
