import { connect } from 'mongoose';
const conectarDB = require('mongoose');

const conectarBD = async ()  => {
    return await connect (
        'mongodb+srv://admin:admin123@cluster0.27qgu.mongodb.net/Gestion-de-proyectos?retryWrites=true&w=majority'
        )
        .then (()=> {
            console.log ('Conexion exitosa');
        })
        .catch ((e)=> {
            console.log ('Error al conectarse a la db', e);    
        });
};

export  default conectarBD;