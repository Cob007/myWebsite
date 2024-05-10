import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sample from "./component/Sample/Sample";
import Home from "./page/Home/Home";
import Header from "./component/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Sample />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
