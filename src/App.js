import React from "react";
import Page from "./components/Page";
import Post from "./components/Context";

const App = () => {
  return (
    <div>
      <Post>
        <Page />
      </Post>
    </div>
  );
};

export default App;
