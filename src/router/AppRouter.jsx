import React from "react";
import Home from "../pages/Home";
// import Donde from "../pages/Donde";
import Acerca from "../pages/Acerca";
import Menu from "../pages/Menu";
import Reservas from "../pages/Reservas";
import { Navigate, Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="donde" element={<Donde />} /> */}
        <Route path="acerca" element={<Acerca />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservas" element={<Reservas />} />

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default AppRouter;
