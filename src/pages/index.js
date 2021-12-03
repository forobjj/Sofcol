import React from "react";
import Logo from "assets/Logo.png";
import "../index.css"

const index = () => {
  return (
    <div display="flex" justify-content="center" height="100%">
      <h1 className='tituloUno' >PROYECTOS</h1>
      <h1 className='tituloUno' > Gestion de Proyectos</h1>
      <img src={Logo} alt=""/>
    </div>
  );
};

export default index;
