import React from "react";

function Footer() {
    return (
        <>
        
            <footer className="text-center text-lg-start bg-light-grey text-muted">
                {/* Section: Social media */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* Left */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Redes Sociales:</span>
                    </div>
                    {/* Left */}
                    {/* Right */}
                    <div>
                        <a href className="me-4 dark-link">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href className="me-4 link-darks">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href className="me-4 link-secondary">
                            <i className="fab fa-google" />
                        </a>
                        <a href className="me-4 link-secondary">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href className="me-4 link-secondary">
                            <i className="fab fa-linkedin" />
                        </a>
                        <a href className="me-4 link-secondary">
                            <i className="fab fa-github" />
                        </a>
                    </div>
                    {/* Right */}
                </section>
                {/* Section: Social media */}
                {/* Section: Links  */}
                <section className>
                    <div className="container text-center text-md-start mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3 text-secondary" />KEEP & BITE
                                </h6>
                                <p>
                                    Te acompañamos en tdoso los momentos, desde llevar un desayuno, donas o pedidos especiales a domicilio, hasta en tus mejores festejos. 
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                {/* <h6 className="text-uppercase fw-bold mb-4">
                                    Eventos
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Desayunos</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Donas a domicilio</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Eventos Automotrices</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">XV Años</a>
                                </p> */}
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                {/* <h6 className="text-uppercase fw-bold mb-4">
                                    Anunciate aqui
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Anuncio 1</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Anuncio 2</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Anuncio 2</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p> */}
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3 text-secondary" /> Guadalajara, Jal</p>
                                <p><i className="fas fa-home me-3 text-secondary" /> Tequila, Jal</p>
                                <p>
                                    <i className="fas fa-envelope me-3 text-secondary" />
                                    keepandbite@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3 text-secondary" /> + 01 33 17 79 58 46</p>
                              
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}>
                    © 2022 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </>
    );
}

export default Footer;