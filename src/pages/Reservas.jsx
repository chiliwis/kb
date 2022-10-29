import React, { useState } from "react";

function Reservas() {

    const [form, setForm] = useState({
        name: '',
        pastel: '',
        personas: '',
        date: '',
        message: ''
    });

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function sendData(event) {
        event.preventDefault();
        console.log(form);
    }

    return (
        <>
            <div className="container" id="where" style={{ paddingBottom: 32, paddingTop: 32 }}>
                <div className="content" style={{ maxWidth: 700 }}>
                    <h5 className="center w3-padding-48"><span className="w3-tag w3-wide">RESERVACIONES</span></h5>
                    <p><strong>Reserva</strong> tu fecha de entrega y lugar del pedido:</p>
                    <form onSubmit={sendData}>
                        <p><input className="w3-input w3-padding-16 w3-border w3-sand" type="text" placeholder="NOMBRE" required name="Name" onChange={handleInputChange} /></p>
                        <p><input className="w3-input w3-padding-16 w3-border w3-sand" type="text" placeholder="SABOR DEL PASTEL" required name="Pastel" onChange={handleInputChange} /></p>
                        <p><input className="w3-input w3-padding-16 w3-border w3-sand" type="number" placeholder="PARA CUÁNTAS PERSONAS" required name="Personas" onChange={handleInputChange} /></p>
                        <p><input className="w3-input w3-padding-16 w3-border w3-sand" type="datetime-local" placeholder="FECHA" required name="Date" onChange={handleInputChange} defaultValue="2020-11-16T20:00" /></p>
                        <p><input className="w3-input w3-padding-16 w3-border w3-sand" type="text" placeholder="NOTAS \ REQ ESPECIALES" required name="Message" onChange={handleInputChange} /></p>
                        <p><button className="w3-button w3-orange" type="submit">RESERVAR</button></p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Reservas;