const mongoose = require('mongoose');

const url = 'mongodb+srv://admin:admin123@cluster0.27qgu.mongodb.net/Gestion-de-proyectos?retryWrites=true&w=majority'
//cone

//cone

mongoose.connect(url)
.then(()=>console.log('La conexion esta establecida') )
.catch( (e)=> console.log("Error en la conexion", + e) )


//Schema
const avancesSchema = mongoose.Schema({
    fecha: {
        type: Date,
        required: true,
      },
      descripcion: {
        type: String,
        required: true,
      },
      observaciones: 
        {
          type: String,
        },
         

});
//model

const AvancesModel = mongoose.model('avances', avancesSchema)

//read
const readElements = async ()=>{
    const avances = await AvancesModel.find()
    console.log(avances)
}
const readElementsByfecha = async (fecha)=>{
    const avances = await AvancesModel.findById(
        {fecha: fecha}
    )
    console.log(avances)
}


//create

const createAvance = async ()=>{
    const avance = new AvancesModel({
        fecha: "10/10/10",
        descripcion: "probando avance ",
        observaciones: "Administrador prueba",
    })
    const insertAvance = await avance.save();
    console.log(insertAvance);
}


//update
const updateAvance = async (fecha) =>{
    const avance = await AvancesModel.updateOne(
        {_fecha:fecha},
        {$set: {
            descripcion:"Cambio avance",
            observaciones: "Modificando avance",
        }}
    ) 
}
//delete
 const deleteAvance = async (fecha)=>{
     const avance = await AvancesModel.deleteOne({_fecha: fecha})
     console.log(avance)
 }

 //createAvance();
 //readElements();
 //updateAvance(10/10/10);
 deleteAvance(10/10/10);