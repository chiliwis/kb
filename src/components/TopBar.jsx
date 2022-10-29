import React from "react";
import { NavLink } from "react-router-dom";

function TopBar() {
  return (
    <>
      <div className="w3-top">
        <div className="w3-row w3-padding w3-orange">
          <div className="w3-col s3">
            <NavLink to="/home" className="w3-button w3-block w3-brown">
              INICIO
            </NavLink>
          </div>
          <div className="w3-col s3">
            <NavLink to="/acerca" className="w3-button w3-block w3-brown">
              HISTORIA
            </NavLink>
          </div>
          <div className="w3-col s3">
            <NavLink to="/menu" className="w3-button w3-block w3-brown">
              MENU
            </NavLink>
          </div>
          <div className="w3-col s3">
            <NavLink to="/reservas" className="w3-button w3-block w3-brown">
              RESERVAS
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
