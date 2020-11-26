import { useState, useEffect } from "react";
import API_KEY from "./Keys";

const CONTEXT_KEY = "53d4882a3fbec256b";

const GoogleSearch = (term) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => setData(result));
    };
    fetchData();
  }, [term]);
  return { data };
};

export default GoogleSearch;
