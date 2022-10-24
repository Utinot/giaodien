import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./page/Home";
import "./assets copy/css/styles.css";
import "./assets copy/js/custom.js";
import "./assets copy/js/jquery.min.js";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
