import { useEffect, useState, useRef } from "react";

export default function useFetch() {
  const [data, setData] = useState({});
  const [Loading, setLoading] = useState(false);
  const [inputURL, setInputURL] = useState("");
  const inputRef = useRef(null);

  const getData = async (url) => {
    if (!url) return;
    setLoading(true);

    console.log("fetched");
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setInputURL("");
    setLoading(false);
    inputRef.current.focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getData(inputURL);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  /*
  //This logic run for every five second and re-fetches the data

  useEffect(() => {
    console.log("Entered the interval");
    const interval = setInterval(() => {
      getData(inputURL);
    }, timeout * 1000);

    return ()=> clearInterval(interval)
  }, [inputURL]);
  */

  return {
    data,
    handleKeyPress,
    inputRef,
    inputURL,
    setInputURL,
    getData,
    Loading,
  };
}
