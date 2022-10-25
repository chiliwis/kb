function Reservas() {
    return (
        <>
            <div className="w3-container" id="where" style={{ paddingBottom: 32 }}>
                <div className="w3-content" style={{ maxWidth: 700 }}>
                    <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">RESERVACIONES</span></h5>
                    <p><strong>Reserva</strong> tu fecha de entrega y lugar del pedido:</p>
                    <form action="/action_page.php" target="_blank">
                        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="NOMBRE" required name="Name" /></p>
                        <p><input className="w3-input w3-padding-16 w3-border" type="number" placeholder="SABOR DEL PASTEL" required name="Pastel" /></p>
                        <p><input className="w3-input w3-padding-16 w3-border" type="number" placeholder="PARA CUÁNTAS PERSONAS" required name="Personas" /></p>
                        <p><input className="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="FECHA" required name="date" defaultValue="2020-11-16T20:00" /></p>
                        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="NOTAS \ REQ ESPECIALES" required name="Message" /></p>
                        <p><button className="w3-button w3-black" type="submit">RESERVAR</button></p>
                    </form>
                </div>
            </div>
        </>

    );
}

export default Reservas;