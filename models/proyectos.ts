import { SchemaTypes, model, Schema } from "mongoose";
import { UsuarioModel } from "./usuarios";

const proyectosSchema = new Schema({
  nombre: {
    type: String,
    require: true,
  },
  objetivosGenerales: {
    type: String,
    require: true,
  },
  objetivosEspecificos: {
    type: String,
    require: true,
  },
  presupuesto: {
    type: Number,
    require: true,
  },
  fechaInicio: {
      type: Date,
      require: true,
  },
  fechaFin: {
      type: Date,
      require: true,
  },
  lider: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: UsuarioModel,
  },
  estado: {
      type: String,
      require: true,
      enum: ['Activo', 'Inactivo'],    
  },
  fase: {
      type: String,
      require: true,
      enum: ['Iniciado', 'Desarrollo', 'Terminado'],
  }, 
});

const ProyectosModel = model('proyectos', proyectosSchema);

export { ProyectosModel };