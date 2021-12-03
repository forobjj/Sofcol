import React from 'react';
import {ContenedorBotonCentrado, Boton, MensajeExito} from 'elements/Formularios';

const BotonesProyectos = ({nombreBoton, mensajeBoton, formularioValido}) => {
    return (
        <ContenedorBotonCentrado>
            <Boton type="submit">{nombreBoton}</Boton>
            {formularioValido && <MensajeExito>{mensajeBoton}</MensajeExito>}
        </ContenedorBotonCentrado>

    )
};

export default BotonesProyectos;
