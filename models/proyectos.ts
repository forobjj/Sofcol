import { SchemaTypes, model, Schema } from "mongoose";

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

const ProyectosModel = model('proyectos', proyectosSchema);

export { ProyectosModel };