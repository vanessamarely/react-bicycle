import { useState } from "react";

const initialData = {
  id: 1,
  brand: "",
  bicycleType: "",
  color: "",
  status: "",
  image: "",
};
const CreateBicycle = () => {
  const [data, setData] = useState(initialData);

  const handleCreate = (e) => {
    e.preventDefault();
  };

  const handleImage = (e) => {
    const file = e?.target?.files[0];
    setData({ ...data, image: URL.createObjectURL(file) });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Crear Bicicleta
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="InputBrand"
            >
              Marca Bicicleta
            </label>
            <input
              type="text"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="InputBrand"
              placeholder="Marca Bicicleta"
              value={data.brand}
              onChange={(e) => setData({ ...data, brand: e.target.value })}
            ></input>
          </div>
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="InputBicycleType"
            >
              Tipo de Bicicleta
            </label>
            <input
              type="text"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="InputBicycleType"
              placeholder="Tipo de Bicicleta"
              value={data.bicycleType}
              onChange={(e) =>
                setData({ ...data, bicycleType: e.target.value })
              }
            ></input>
          </div>
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="InputColor"
            >
              Color
            </label>
            <input
              type="color"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="InputColor"
              value={data.color}
              onChange={(e) => setData({ ...data, color: e.target.value })}
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
              htmlFor="InputImage"
            >
              Imagen
            </label>
            <input
              type="file"
              name="img"
              multiple="true"
              accept="image/*"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="InputImage"
              onChange={() => handleImage()}
            ></input>
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

export default CreateBicycle;
