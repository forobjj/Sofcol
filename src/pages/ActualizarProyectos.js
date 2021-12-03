import React, { useState, useEffect } from 'react';
import Input from 'components/Input';
import { Formulario } from 'elements/Formularios';
import Expresiones from 'components/Expresiones';
import BotonCentrado from 'components/BotonCentrado';
import AlertaError from 'components/AlertaError'
import Selects from 'components/Selects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory, useParams } from 'react-router-dom';
import * as api from 'Api'


const ActualizarProyectos = () => {

    const params = useParams();
    const history = useHistory();

    const initialState = { _id: '', nombre: '', objetivosGenerales: '', objetivosEspecificos: '', presupuesto: '', fechaInicio: '', fechaFin: '', nombreLider: '', cedulaLider: '', Estado: '' };
    const [usuarios, setUsuarios] = useState(initialState);

 // const [idUsuario, cambiarIdUsuario] = useState({valido: ''});
    const [nombre, cambiarNombre] = useState({ campo: '', valido: '' });
    const [objetivosGenerales, cambiarobjetivosGenerales] = useState({ campo: '', valido: '' });
    const [objetivosEspecificos, cambiarobjetivosEspecificos] = useState({ campo: '', valido: '' });
    const [presupuesto, cambiarpresupuesto] = useState({ campo: '', valido: '' });
    const [fechaInicio, cambiarfechaInicio] = useState({ campo: '', valido: '' });
    const [fechaFin, cambiarfechaFin] = useState({ campo: '', valido: '' });
    const [nombreLider, cambiarnombreLider] = useState({ campo: '', valido: '' });
    const [cedulaLider, cambiarcedulaLider] = useState({ campo: '', valido: '' });
    const [Estado, cambiarEstado] = useState({ campo: '', valido: '' });
    // const [fase, cambiarfase] = useState({ campo: '', valido: '' });
    const [formularioValido, cambiarFormularioValido] = useState('');
    
    const getProyecto = async (proyectId) => {
        try {
            const res = await api.getProyect(proyectId);
            setUsuarios(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (params.id) {
            getProyecto(params.id);
            cambiarNombre({ valido: "true" });
            cambiarobjetivosGenerales({ valido: "true" });
            cambiarobjetivosEspecificos({ valido: "true" });
            cambiarpresupuesto({ valido: "true" });
            cambiarfechaInicio({ valido: "true" });
            cambiarfechaFin({ valido: "true" });
            cambiarnombreLider({ valido: "true" });
            cambiarcedulaLider({ valido: "true" });
            cambiarEstado({ valido: "true" });
            // cambiarfase({ valido: "true" });
            
        }
        // eslint-disable-next-line
    }, []);


    const onSubmitForm = async (e) => {
        e.preventDefault();
        if (
            nombre.valido === 'true' &&
            objetivosGenerales.valido === 'true' &&
            objetivosEspecificos.valido === 'true' &&
            presupuesto.valido === 'true' &&
            fechaInicio.valido === 'true' &&
            fechaFin.valido === 'true' &&
            nombreLider.valido === 'true' &&
            cedulaLider.valido === 'true' &&
            Estado.valido === 'true' 
            // fase.valido === 'true' 
            
        ) {
            cambiarFormularioValido(true);
            try {
                let res;
                if (!params.id) {
                    res = await api.registerProyects(usuarios);
                    console.log(res)
                    if (res === 'OK') {
                        setUsuarios(initialState);
                    }
                } else {
                    await api.updateProyect(params.id, usuarios);
                }
                history.push("/GestionProyectos");
            } catch (error) {
                console.log(error)
            }
        } else {
            cambiarFormularioValido(false);
        }
    }

    const proyectoDisponible = [
        { value: '0', label: 'Activo' },
        { value: '1', label: 'Inactivo' },
    ];
    const proyectofase = [
        { value: '0', label: 'Iniciado' },
        { value: '1', label: 'Desarrollo' },
        { value: '2', label: 'Terminado' },
    ];

    return (
        <main>
            <button className="botonVolver">
                <Link to='/listadoProyectos'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
            </button>
            <h2 className="tituloGestionVentas">Registro de proyectos</h2>
            <Formulario className="guiGestionUsuarios" onSubmit={onSubmitForm} action="">
                <Input
                    user="Nombre"
                    placeholdercont="Nombre proyecto"
                    tipo="text"
                    leyenda="El nombre solo admite letras"
                    expresionRegular={Expresiones.nombre}
                    DefVal={usuarios.nombre}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                    name="nombre"
                    estado={nombre}
                    fase={nombre}
                    cambiarEstado={cambiarNombre}
                    cambiarfase={cambiarNombre}

                />
                <Input
                    user="objetivosGenerales"
                    placeholdercont="objetivosGenerales proyecto"
                    tipo="text"
                    leyenda="los objetivos Generales solo admite letras"
                    expresionRegular={Expresiones.nombre}
                    name="objetivosGenerales"
                    estado={objetivosGenerales}
                    cambiarEstado={cambiarobjetivosGenerales}
                    DefVal={usuarios.objetivosGenerales}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                />
                <Input
                    user="objetivosEspecificos"
                    placeholdercont="objetivosEspecificos proyecto"
                    tipo="text"
                    leyenda="Los objetivos Especificos solo admite letras"
                    expresionRegular={Expresiones.nombre}
                    name="objetivosEspecificos"
                    estado={objetivosEspecificos}
                    cambiarEstado={cambiarobjetivosEspecificos}
                    DefVal={usuarios.objetivosEspecificos}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                />

                <Input
                    user="presupuesto"
                    placeholdercont="presupuesto proyecto"
                    tipo="number"
                    leyenda="El presupuesto solo admite números"
                    expresionRegular={Expresiones.valores}
                    name="presupuesto"
                    estado={presupuesto}
                    cambiarEstado={cambiarpresupuesto}
                    DefVal={usuarios.presupuesto}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                />
                <Input
                    user="fechaInicio"
                    placeholdercont="fecha Inicio proyecto"
                    tipo="number"
                    leyenda="El fecha Inicio solo admite números"
                    expresionRegular={Expresiones.valores}
                    name="fechaInicio"
                    estado={fechaInicio}
                    cambiarEstado={cambiarfechaInicio}
                    DefVal={usuarios.fechaInicio}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                />
                <Input
                    user="fechaFin"
                    placeholdercont="fecha Fin proyecto"
                    tipo="number"
                    leyenda="El fecha Fin solo admite números"
                    expresionRegular={Expresiones.valores}
                    name="fechaFin"
                    estado={fechaFin}
                    cambiarEstado={cambiarfechaFin}
                    DefVal={usuarios.fechaFin}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                />
                
                <Input
                    user="nombreLider"
                    placeholdercont="nombre Lider proyecto"
                    tipo="text"
                    leyenda="Los nombre Lider solo admite letras"
                    expresionRegular={Expresiones.nombre}
                    name="nombreLider"
                    estado={nombreLider}
                    cambiarEstado={cambiarnombreLider}
                    DefVal={usuarios.nombreLider}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                />
                
                <Input
                    user="cedulaLider"
                    placeholdercont="cedula Lider proyecto"
                    tipo="number"
                    leyenda="Los cedula Lider solo admite letras"
                    expresionRegular={Expresiones.valores}
                    name="cedulaLider"
                    estado={cedulaLider}
                    cambiarEstado={cambiarcedulaLider}
                    DefVal={usuarios.cedulaLider}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                />
                <Selects
                    user="Estado"
                    placeholdercont="Selecciona el estado"
                    tipo="text"
                    leyenda="Solo ingrese Activo o Inactivo"
                    expresionRegular={Expresiones.nombre}
                    name="Estado"
                    estado={Estado}
                    cambiarEstado={cambiarEstado}
                    opciones={proyectoDisponible}
                    DefVal={proyectoDisponible[usuarios.Estado]}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                />
                


                {formularioValido === false && <AlertaError />}
                {params.id ? (
                    <BotonCentrado
                        nombreBoton="Actualizar"
                        mensajeBoton="Actualización exitos"
                        formularioValido={formularioValido}
                    />
                ) : (
                    <BotonCentrado
                        nombreBoton="Crear"
                        formularioValido={formularioValido}
                        mensajeBoton="Creación exitosa"
                    />
                )}
            </Formulario>
        </main>
    )
};

export default ActualizarProyectos;