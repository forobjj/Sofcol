
import { SchemaTypes, model, Schema } from "mongoose";

//Schema
const usuariosSchema = new Schema({
    nombre: {
        type: String,
        require : true
    },
    apellido: {
        type: String,
        require : true
    },
    cargo: {
        type: String,
        enum:['Estudiante', 'Lider', 'Administrador'],
    },
    correo: String,
    _cedula :{
        type: String,
        require: true,
        
    },
    

});
//model

const UsuarioModel = model ('Usuarios', usuariosSchema)
export { UsuarioModel };

