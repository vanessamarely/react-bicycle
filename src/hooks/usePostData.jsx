import { useState } from "react";

function usePostData(urlBridge, urlService) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function postData(payload) {
    setIsLoading(true);

    try {
      const response = await fetch(urlBridge, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const responseService = await fetch(urlService, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        const json = await responseService.json();
        setData(json);
        setIsLoading(false);
      } else {
        const json = await response.json();

        setData(json);
        setIsLoading(false);
      }
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }

  return { data, isLoading, error, postData };
}

export default usePostData;
