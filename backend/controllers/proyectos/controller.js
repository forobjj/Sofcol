import { getDB } from '../../db/db.js';
import {ObjectId} from 'mongodb';

const queryAllProyectos = async (callback) =>{
    const baseDeDatos = getDB();
    await baseDeDatos.collection('proyecto').find().limit(50).toArray(callback);
};

const consultarProyecto = async (id, callback) =>{
    const baseDeDatos = getDB();
    await baseDeDatos.collection('proyecto').findOne({_id: new ObjectId(id)}, callback);
}

const crearProyecto = async (datosProyecto, callback) =>{
    const baseDeDatos = getDB();    
    if(
        Object.keys(datosProyecto).includes("nombre") &&
        Object.keys(datosProyecto).includes("objetivosGenerales") &&
        Object.keys(datosProyecto).includes("objetivosEspecificos") &&
        Object.keys(datosProyecto).includes("presupuesto") &&
        Object.keys(datosProyecto).includes("fechaInicio") &&
        Object.keys(datosProyecto).includes("fechaFin") &&
        Object.keys(datosProyecto).includes("nombreLider") &&
        Object.keys(datosProyecto).includes("cedulaLider") &&
        Object.keys(datosProyecto).includes("Estado") 
        // Object.keys(datosProyecto).includes("fase")
       
    ){
     //implementar codigo para crear proyecto en BD
        await baseDeDatos.collection('proyecto').insertOne(datosProyecto, callback)
    }else{
        return "error";
        }
}

const editarProyecto = async (id, edicion, callback)=>{
    const filtroProyecto = { _id: new ObjectId(id) };
    const operacion = {
      $set: edicion,
    };
    const baseDeDatos = getDB();
    await baseDeDatos
      .collection('proyecto')
      .findOneAndUpdate(filtroProyecto, operacion, { upsert: true, returnOriginal: true }, callback)     
};

const eliminarProyecto = async (id, callback) => {
    const filtroProyecto= { _id: new ObjectId(id) };
    const baseDeDatos = getDB();
    await baseDeDatos.collection('proyecto').deleteOne(filtroProyecto, callback)
}


export {queryAllProyectos, crearProyecto, editarProyecto, eliminarProyecto, consultarProyecto};






/*     nombre
        objetivosGenerales
        objetivosEspecificos
       presupuesto
       fechaInicio
       fechaFin
       nombreLider
      cedulaLider
        Estado
        fase */