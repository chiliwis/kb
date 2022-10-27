function TopBar () {
    return (  
        <>
        <div className="w3-top">
        <div className="w3-row w3-padding w3-orange">
          <div className="w3-col s3">
            <a href="#" className="w3-button w3-block w3-brown">INICIO</a>
          </div>
          <div className="w3-col s3">
            <a href="#about" className="w3-button w3-block w3-brown">HISTORIA</a>
          </div>
          <div className="w3-col s3">
            <a href="#menu" className="w3-button w3-block w3-brown">MENU</a>
          </div>
          <div className="w3-col s3">
            <a href="#where" className="w3-button w3-block w3-brown">DONDE</a>
          </div>
        </div>
      </div>
        </>
        
    );
}

export default TopBar;
