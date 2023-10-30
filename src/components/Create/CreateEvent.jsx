import { useState, useEffect } from "react";
import usePostData from "./../../hooks/usePostData";
import { urlGetAllCER, urlGetAllCERService } from "./../../utils/services";
import usePatch from "./../../hooks/usePatch";

const CreateEvent = ({ setECRForm, dataType = null }) => {
  const {
    data: response,
    isLoading: loading,
    error,
    postData,
  } = usePostData(urlGetAllCER, urlGetAllCERService);

  const { responsePatch, isLoadingPatch, errorPatch, patchData } = usePatch(
    urlGetAllCER,
    urlGetAllCERService
  );

  const [errorMessage, setErrorMessage] = useState(null);
  const [data, setData] = useState({
    name: "",
    type: "",
    description: "",
    location: "Medellin",
  });

  useEffect(() => {
    if (response) {
      setTimeout(() => {
        setECRForm(false);
      }, 1000);
    }
  }, [response]);

  const handleCreate = async (e) => {
    e.preventDefault();

    if (
      data.name === "" ||
      data.type === "" ||
      data.description === "" ||
      data.location === ""
    ) {
      setErrorMessage("Todos los campos son obligatorios");
    } else {
      if (dataType !== null) {
        setErrorMessage(null);
        const params = {
          eventId: dataType.eventId,
          name: dataType.name,
          type: data.type,
          description: data.description,
          location: data.location,
        };

        setErrorMessage(null);
        await patchData(params);
      } else {
        const payload = {
          name: data.name,
          type: data.type,
          description: data.description,
          location: data.location,
        };
        setErrorMessage(null);
        await postData(payload);
      }
    }
  };

  useEffect(() => {
    if (dataType) {
      console.log(dataType);
      setData({
        name: dataType.name,
        type: dataType.type,
        description: dataType.description,
        location: dataType.location,
      });
    }
  }, [dataType]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 sm:px-6 lg:px-2">
      <div className="max-w-md w-full space-y-8 bg-white p-5 rounded-md shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {dataType ? "Actualizar" : "Crear"} ECR
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
                <div>Creada!</div>
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
                htmlFor="InputName"
              >
                Nombre
              </label>
              <input
                type="text"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="InputName"
                placeholder="Nombre"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="InputType"
              >
                Tipo de ECR (Evento, Ruta o Competencia)
              </label>
              <select
                value={data.type}
                onChange={(e) =>
                  setData({
                    ...data,
                    type: e.target.value,
                  })
                }
                id="InputType"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              >
                <option value="">Seleccione un tipo</option>
                <option value="event">Evento</option>
                <option value="competition">Competencia</option>
                <option value="route">Ruta</option>
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="InputColor"
              >
                Descripcion
              </label>
              <input
                type="text"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="InputDescription"
                value={data.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    description: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="InputLocation"
              >
                Location
              </label>
              <input
                type="text"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="InputLocation"
                value={data.location}
                onChange={(e) =>
                  setData({
                    ...data,
                    location: e.target.value,
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
export default CreateEvent;
