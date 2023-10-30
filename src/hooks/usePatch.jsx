import { useState } from "react";

const usePatch = (urlBridge, urlService) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // const [isSuccess, setIsSuccess] = useState(false);

  async function patchData(params) {
    setIsLoading(true);

    try {
      const response = await fetch(urlBridge, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        const responseService = await fetch(urlService, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        });
        const json = await responseService.json();
        setError(json);
        setIsLoading(false);
      } else {
        const json = await response.json();
        setResponse(json);
        setIsLoading(false);
      }
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }

  return {
    responsePatch: response,
    isLoadingPatch: isLoading,
    errorPatch: error,
    patchData,
  };
};

export default usePatch;
