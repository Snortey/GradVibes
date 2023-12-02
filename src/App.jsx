import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Navbar from "./Components/navbar/Navbar";
import PersonalPic from "./Pages/personalpicturespage/PersonalPic";
import PicturePage from "./Pages/picturespage/Pictures";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="personalpicturespage"
          element={
            <>
              <Navbar />
              <PersonalPic />
            </>
          }
        />
        <Route
          path="picturespage"
          element={
            <>
              <Navbar />
              <PicturePage />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
