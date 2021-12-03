import React, { useEffect, useState } from 'react';
import {Table, TableHead, TableData, Boton, ContenedorBotonCentrado, TableRow} from 'elements/Listas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import * as api from 'Api';




const GestionProyectos = () => {

  const [proyectos, setProyectos] = useState([]);
  

  const listProyectos = async()=>{
    try{
      const res = await api.listProyect();
      setProyectos(res.data)

    }catch(error){
      console.log(error)
    }
  };

  useEffect(()=>{
    listProyectos();
  },[]);

  const history = useHistory();

  const handleDelete= async (proyectId)=>{
    await api.deleteProyect(proyectId);
    listProyectos();
  };

  const [busqueda, setBusqueda] = useState('');
  const [proyectosFiltrados, setproyectosFiltrados] = useState(proyectos);

  useEffect(() => {
    setproyectosFiltrados(
      proyectos.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, proyectos]);

  return (
    <main className="mainContainer">
      <ContenedorBotonCentrado>
        <Boton>
          <Link to="/CrearProyectos">Agregar</Link>
        </Boton>
      </ContenedorBotonCentrado>
      <h2 className="tituloGestionProyectos" align = "center">Todos los proyectos</h2>
      <input className = "inputBusqueda"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar'
      />
      <Table>
        <TableHead>
          <tr>      
            <TableData>Proyecto</TableData>
            <TableData>objetivos Generales</TableData>
            <TableData>objetivos Especificos</TableData>
            <TableData>presupuesto</TableData>
            <TableData>fecha Inicio</TableData>
            <TableData>fecha Fin</TableData>
            <TableData>nombre Lider</TableData>
            <TableData>cedula Lider</TableData>
            <TableData>Estado</TableData>
            {/* <TableData>fase</TableData> */}
            <TableData>Actualizar</TableData>
          </tr>
        </TableHead>
        <tbody>
          {proyectosFiltrados.map((proyectos) =>(
              <TableRow key={proyectos._id}>
              <TableData>{proyectos.nombre}</TableData>
              <TableData>{proyectos.objetivosGenerales}</TableData>
              <TableData>{proyectos.objetivosEspecificos}</TableData>
              <TableData>{proyectos.presupuesto}</TableData>
              <TableData>{proyectos.fechaInicio}</TableData>
              <TableData>{proyectos.fechaFin}</TableData>
              <TableData>{proyectos.nombreLider}</TableData>
              <TableData>{proyectos.cedulaLider}</TableData>
              <TableData>{proyectos.Estado.label}</TableData>
              {/* <TableData>{proyectos.fase.label}</TableData> */}
              <TableData>
                <button className="iconSide" onClick={() => {
                  history.push(`/editarProyectos/${proyectos._id}`)}}
                >
                  <FontAwesomeIcon  icon={faPenAlt}/>
                </button>
                <button className="iconSide" onClick={()=>handleDelete(proyectos._id)}>
                  <FontAwesomeIcon icon={faTrashAlt}/>
                </button>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </main>
  );
};

export default GestionProyectos;