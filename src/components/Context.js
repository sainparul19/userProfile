import React, { useState, useEffect } from "react";
import axios from "axios";
// import { ApiContext } from "./ContextProvider";
import { createContext } from "react";
export const ApiContext = createContext([]);

function Context({ children }) {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setBlog(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ApiContext.Provider value={[blog, setBlog]}>
      {children}
    </ApiContext.Provider>
  );
}

export default Context;
