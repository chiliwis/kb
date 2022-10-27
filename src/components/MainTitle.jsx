import dos from '../components/imagenes/dos.jpeg';


function MainTitle() {
    return (  
        <>
        <div className="w3-container w3-padding-64" style={{maxHeight:350}} ></div>
         <div className=" w3-center">
         <img src={dos} style={{ width: '100%', maxWidth: 1000 }} className="w3-margin-top" alt="dos" />
            {/* <img src="./components/imagenes/portada.jpeg" alt="portada" /> */}
        <span className="w3-text-black" style={{ fontSize: 90 }}><br />KEEP&BITE</span>
      </div>
        
        </>

       
    );
}

export default MainTitle;