import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from "assets/logo1.png";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers, faHome, faCashRegister, faShoppingBag, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Aside = () => {
    return (        
            <nav className="sidebar">
                <div padding='20px'><img   className='bola' src={logo1} alt="" /></div>
                <span className="tituloSide">PROYECTOS</span>
                
                <NavLink className="a" activeClassName='active' to='Dashboard'>
                    <FontAwesomeIcon className="iconSide" icon={faHome}/>
                    Inicio
                </NavLink>
                <NavLink className="a" activeClassName='active' to='avances'>
                    <FontAwesomeIcon className="iconSide" icon={faCashRegister}/>
                    Gestion Avances
                </NavLink>
                <NavLink className="a" activeClassName='active' to='GestionProyectos'>
                    <FontAwesomeIcon className="iconSide" icon={faShoppingBag}/>
                    Gestion Proyectos
                </NavLink>
                <NavLink className="a" activeClassName='active' to='tablaGestionUsuarios'>
                    <FontAwesomeIcon className="iconSide" icon={faUsers}/>
                    Gestion de Usuarios
                </NavLink>
                <Link className="a" to=''>
                    <FontAwesomeIcon className="iconSide" icon={faSignOutAlt}/>
                    Salir
                </Link>
            </nav>
        
    )
};

export default Aside;
