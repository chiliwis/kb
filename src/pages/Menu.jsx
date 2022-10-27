function Menu () {
    return ( 
        <>
         <div className="w3-container" id="menu">
                <div className="w3-content" style={{ maxWidth: 700 }}>
                  <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">THE MENU</span></h5>
                  <div className="w3-row w3-center w3-card w3-padding w3-orange">
                    <a href="javascript:void(0)" onclick="openMenu(event, 'Eat');" id="myLink">
                      <div className="w3-col s6 tablink w3-brown">Postres</div>
                    </a>
                    <a href="javascript:void(0)" onclick="openMenu(event, 'Drinks');">
                      <div className="w3-col s6 tablink w3-orange">Pedidos Especiales</div>
                    </a>
                  </div>
                  <div id="Eat" className="w3-container menu w3-padding-48 w3-card" style={{ display: 'block' }}>
                    <h5>Cheesecake de mandarina</h5>
                    <p className="w3-text-grey">Assortment of fresh baked fruit breads and muffins 5.50</p><br />
                    <h5>Cheesecake de frutos rojos</h5>
                    <p className="w3-text-grey">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br />
                    <h5>Pastel de Zanahoria</h5>
                    <p className="w3-text-grey">Vanilla flavored batter with malted flour 7.50</p><br />
                    <h5>Pastel Red Velvet</h5>
                    <p className="w3-text-grey">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br />
                    <h5>Trufas</h5>
                    <p className="w3-text-grey">With syrup, butter and lots of berries 8.50</p>
                  </div>
                  <div id="Drinks" className="w3-container menu w3-padding-48 w3-card" style={{ display: 'none' }}>
                    <h5>Pan de muerto</h5>
                    <p className="w3-text-grey">Relleno de frutos rojos y crema de nata $</p><br />
                    <h5>Rosca de reyes</h5>
                    <p className="w3-text-grey">Tradicional, rellena de crema de avellana o zarzamora con queso crema $</p><br />
                    <h5>Galletas de cafe</h5>
                    <p className="w3-text-grey">Para acompañar tu despertar $</p><br />
                    <h5>Besos de nuez</h5>
                    <p className="w3-text-grey">Receta de la abuela $</p><br />
                    <h5>Pasteles personalizados</h5>
                    <p className="w3-text-grey">De acuerdo a cotizacion $</p>
                  </div>
                  <img src={dos} style={{ width: '100%', maxWidth: 1000, marginTop: 32 }} alt="no hay imagen" />
                </div>
              </div>
        </>
     );
}

export default Menu ;