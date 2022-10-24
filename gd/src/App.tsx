import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./page/Home";
import "./assets copy/css/styles.css";
import "./assets copy/js/smoothproducts.js";

import Detail from "./page/Detail";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="product" element={<Layout />}>
            <Route path="detail" element={<Detail />} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
