import React, { useState, useEffect } from "react";
import axios from "axios";
import { ApiContext } from "./ContextProvider";

function Post({ children }) {
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

export default Post;
