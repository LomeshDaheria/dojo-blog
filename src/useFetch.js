import { useState, useEffect } from 'react';
import api from "./api/posts.js";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
        async function fetchData(url){
          try{

            const {data}=await api.get(url);
            setIsPending(false);
            setData(data);
            setError(null);
            

          }
          catch(err){
            // console.log("err block");
            if(err.response){
              console.log(err.response.data);
              console.log(err.response.header);
              console.log(err.response.status);
            }
            if(err.name==="AbortError"){
              console.log("fetch aborted");
            }
            else{
              console.log(err.message);
              setIsPending(false);
              setError(err.message);  

            }
          }
        }

        fetchData(url);

      // fetch(url, { signal: abortCont.signal })
      // .then(res => {
      //   if (!res.ok) { // error coming back from server
      //     throw Error('could not fetch the data for that resource');
      //   } 
      //   return res.json();
      // })
      // .then(data => {
      //   setIsPending(false);
      //   setData(data);
      //   // console.log(data);
      //   setError(null);
      // })
      // .catch(err => {
      //   if (err.name === 'AbortError') {
      //     console.log('fetch aborted')
      //   } else {
      //     // auto catches network / connection error
      //     setIsPending(false);
      //     setError(err.message);
      //   }
      // })
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;