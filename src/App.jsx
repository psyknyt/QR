import React, { useRef } from "react";
import { useState } from "react";

import "./App.css";

import Camera from "./Camera";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Camera />
    </>
  );
};

export default App;
