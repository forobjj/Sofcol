import Express from 'express';
import { queryAllProyectos, crearProyecto, editarProyecto, eliminarProyecto, consultarProyecto} from '../../controllers/proyectos/controller.js';

const rutasProyectos = Express.Router();

const genericCallback = (res) => (err, result)=>{
    if(err){
        res.status(500).send('error consultando los proyectos');
    }else{
        res.json(result);
    }
};

rutasProyectos.route('/proyecto').get((req,res)=>{
    console.log('alguien hizo get en la ruta /proyecto');
    queryAllProyectos(genericCallback(res));
});

rutasProyectos.route('/proyecto/:id').get((req,res)=>{
    console.log('alguien hizo get en la ruta /proyecto');
    consultarProyecto(req.params.id, genericCallback(res));
});

rutasProyectos.route('/proyecto').post((req,res)=>{
    crearProyecto(req.body, genericCallback(res));
});

rutasProyectos.route('/proyecto/:id').patch((req, res) => {
    editarProyecto(req.params.id, req.body, genericCallback(res));
});

rutasProyectos.route('/proyecto/:id').delete((req,res)=>{
    eliminarProyecto(req.params.id, genericCallback(res));
});

export default  rutasProyectos;