import { useState, useEffect } from "react";

function useFetch(url, urlService, options) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          const resService = await fetch(urlService, options);
          const jsonService = await resService.json();
          setResponse(jsonService);
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
    };
    fetchData();
  }, []);

  return { response, isLoading, error };
}

export default useFetch;
