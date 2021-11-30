import { SchemaTypes, model, Schema } from "mongoose";

//Schema
const proyectoSchema = new Schema({
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

  nombreLider: {
      type: String,
      require: true,
  },

  cedulaLider: {
      type: String,
      require: true,
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
//model

const ProyectoModel = model('proyecto', proyectoSchema);

export { ProyectoModel };