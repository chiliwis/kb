function TopBar () {
    return (  
        <div>
        <div className="w3-top">
          <div className="w3-row w3-padding w3-black">
            <div className="w3-col s3">
              <a href="#" className="w3-button w3-block w3-black">INICIO</a>
            </div>
            <div className="w3-col s3">
              <a href="#about" className="w3-button w3-block w3-black">HISTORIA</a>
            </div>
            <div className="w3-col s3">
              <a href="#menu" className="w3-button w3-block w3-black">MENU</a>
            </div>
            <div className="w3-col s3">
              <a href="#where" className="w3-button w3-block w3-black">DONDE</a>
            </div>
          </div>
        </div>
      </div>

    );
}

export default TopBar