import { useState } from "react";

const useDelete = (urlBridge, urlService) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const deleteData = async (params) => {
    setLoading(true);
    try {
      const response = await fetch(urlBridge, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      setData(response.data);

      if (!response.ok) {
        const responseService = await fetch(urlService, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        });
        const json = await responseService.json();
        setData(json);
        setLoading(false);
      } else {
        const json = await response.json();

        setData(json);
        setLoading(false);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    loadingDelete: loading,
    dataDelete: data,
    errorDelete: error,
    deleteData,
  };
};

export default useDelete;
