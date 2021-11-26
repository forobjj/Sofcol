const mongoose = require('mongoose');

const url = 'mongodb+srv://admin:admin123@cluster0.27qgu.mongodb.net/Gestion-de-proyectos?retryWrites=true&w=majority'
//cone

//cone

mongoose.connect(url)
.then(()=>console.log('La conexion esta establecida') )
.catch( (e)=> console.log("Error en la conexion", + e) )


//Schema
const usuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        require : true
    },
    apellido: {
        type: String,
        require : true
    },
    cargo: String,
    correo: String,
    _cedula :{
        type: String,
        require: true,
        
    },
    

});
//model

const UsuarioModel = mongoose.model('Usuarios', usuariosSchema)


//read
const readElements = async ()=>{
    const usuarios = await UsuarioModel.find()
    console.log(usuarios)
}
const readElementsByCedula = async (cedula)=>{
    const usuarios = await UsuarioModel.findById(
        {_cedula: cedula}
    )
    console.log(usuarios)
}


//create

const createUsuario = async ()=>{
    const usuario = new UsuarioModel({
        nombre: "Jonathan",
        apellido: "Echeverri",
        cargo: "Administrador",
        correo:"jonathan@gmail.com",
        _cedula:"1036944735",
    })
    const insertUsuario = await usuario.save();
    console.log(insertUsuario);
}


//update
const updateUsuario = async (cedula) =>{
    const usuario = await UsuarioModel.updateOne(
        {_cedula:cedula},
        {$set: {
            apellido: "Arbelaez",
            correo:"jonathan.echeverri1@gmail.com"
        }}
    ) 
}
//delete
 const deleteUsuario = async (cedula)=>{
     const usuario = await UsuarioModel.deleteOne({cedula: cedula})
     console.log(usuario)
 }



//createUsuario();
//updateUsuario('1036944735');
//readElements();
//deleteUsuario('1036944735');