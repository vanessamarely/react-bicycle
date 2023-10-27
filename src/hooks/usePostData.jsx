import { useState } from 'react';

function usePostData(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function postData(payload) {
    setIsLoading(true);
    console.log('payload__ ', payload)
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      console.log('response__ ', response)
      const json = await response.json();
      console.log('json__ ', json)
      setData(json);
      setIsLoading(false);
    } catch (error) {
      console.log('error__ ', error)
      setError(error);
      setIsLoading(false);
    }
  }

  return { data, isLoading, error, postData };
}

export default usePostData;