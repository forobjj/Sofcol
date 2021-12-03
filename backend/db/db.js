import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const stringConexion = "mongodb+srv://admin:admin123@cluster0.27qgu.mongodb.net/Gestion-de-proyectos?retryWrites=true&w=majority";

const client = new MongoClient(stringConexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let baseDeDatos;

const conectarBD = (callback) => {
    client.connect((err, db) => {
        if (err) {
            console.error('Error conectando a la base de datos');
            return 'error';
        }
        baseDeDatos = db.db('proyectos');
        console.log('baseDeDatos exitosa');
        return callback();
    });
}

const getDB = () => {
    return baseDeDatos;
}
export { conectarBD, getDB };