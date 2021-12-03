import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, Link } from 'react-router-dom';
import {faUsers, faHome, faCashRegister, faShoppingBag, faSignOutAlt, faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';

const SideResponsive = () => {
    const [mostrarNavegacion, setMostrarNavegacion] = useState(false)
    return (
        <div>
            <FontAwesomeIcon  className="burger" size="4x" icon={mostrarNavegacion? faWindowClose : faBars} onClick={()=>setMostrarNavegacion(!mostrarNavegacion)} />
            <div className="responsive" padding='20px'>
                {mostrarNavegacion && (  
                <nav>
                    <span className="tituloSide">SofCol</span>
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
                        Gestion Usuarios
                    </NavLink>
                    <Link className="a" to=''>
                        <FontAwesomeIcon className="iconSide" icon={faSignOutAlt}/>
                        Salir
                    </Link>
                </nav>
                )}
            </div>
        </div>
    )
};

export default SideResponsive;
