import { SchemaTypes, model, Schema } from "mongoose";

const avancesSchema = new Schema({
  idProyecto: {
    type: String,
    require: true,
  },
  fecha: {
    type: Date,
    require: true,
  },
  descripcion: {
    type: String,
    require: true,
  },
  observaciones:
  {
    type: String,
  },
});

const AvancesModel = model('avances', avancesSchema);

export { AvancesModel };