import { connect } from 'mongoose';

const conectarBD = async ()  => {
    return await connect (process.env.DATABASE_URL)
        .then (()=> {
            console.log ('Conexion exitosa');
        })
        .catch ((e)=> {
            console.log ('Error al conectarse a la db', e);    
        });
};

export  default conectarBD;