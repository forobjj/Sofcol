import { SchemaTypes, model, Schema } from "mongoose";

const UsuariosSchema = new Schema({
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
        enum:['ESTUDIANTE', 'LIDER', 'ADMINISTRADOR'],
    },
    correo:{ 
        type: String,
        require: true 
    },
    _cedula :{
        type: String,
        require: true        
    },
    

});

const UsuarioModel = model ('Usuarios', UsuariosSchema)
export { UsuarioModel };
