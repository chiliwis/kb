import React from "react";

function Footer() {
    return (
        <>

            <footer className="text-center text-lg-start bg-light-grey text-muted">

                {/* <section className> */}
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3 text-secondary" />KEEP & BITE
                                </h6>
                                <p>
                                    Te acompañamos en tdoso los momentos, desde llevar un desayuno, donas o pedidos especiales a domicilio, hasta en tus mejores festejos.
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3 text-secondary" /> Guadalajara, Jal</p>
                                <p><i className="fas fa-home me-3 text-secondary" /> Tequila, Jal</p>
                                <p>
                                    <i className="fas fa- me-3 text-secondary" />
                                    keepandbite@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3 text-secondary" /> + 01 33 17 79 58 46</p>
                            </div>
                        </div>
                    </div>
                {/* </section> */}
                {/* <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}>
                    © 2022 Copyright: </div>
                <div>
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div> */}


            </footer>
        </>
    );
}

export default Footer;