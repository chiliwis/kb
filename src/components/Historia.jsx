import React from "react";
import portada from "../components/imagenes/portada.jpeg";

function Historia() {
  return (
    <>
      <div className="w3-container" id="intro">
        <div className="w3-content" style={{ maxWidth: 700 }}>
          <h5 className="w3-center w3-padding-64">
            <span className="w3-tag w3-wide">ACERCA DE KEEP&BITE</span>
          </h5>
          <p>
            Creado en noviembre 2017 en Guadalajara Jalisco pero con sede en la
            ciudad de Tequila, Jalisco.
          </p>
          <p>
            niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p>
            In addition to our full espresso and brew bar menu, we serve fresh
            made-to-order breakfast and lunch sandwiches, as well as a selection
            of sides and salads and other good stuff.
          </p>
          <div className="w3-panel w3-leftbar w3-sand">
            <p className="w3-center">
              <i>
                "Todo comenzo con un bocado y ahora nos comemos el mundo a
                mordidas."
              </i>
            </p>
            <p className="w3-right">Odin</p>
          </div>
          <img
            src={portada}
            style={{ width: "100%", maxWidth: 1000 }}
            className="w3-margin-top"
            alt="Imgportada"
          />
        </div>
      </div>
    </>
  );
}

export default Historia;
