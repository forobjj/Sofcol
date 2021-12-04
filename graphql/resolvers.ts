import { ProyectosModel } from "../models/proyectos";
import { UsuarioModel } from "../models/usuarios";

const resolvers = {
    Query:{
        buscarUsuarios: async (parent, args) => {
            const usuarios = await UsuarioModel.find() 
            return usuarios;
        },

        buscarProyectos: async (parent, args) => {
            const proyectos = await ProyectosModel.find() 
            return proyectos;
        }

    },
    Mutation:{
        crearUsuario: async (parent, args) => {
            const usuarioCreado = await UsuarioModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                cargo: args.cargo,
                correo: args.correo,
                _cedula: args._cedula
                
            })
            return usuarioCreado;
        },

        editarUsuario: async (parent, args) => {
            const usuarioEditado = await UsuarioModel.findByIdAndUpdate(args._id, {
                nombre: args.nombre,
                apellido: args.apellido,
                cargo: args.cargo,
                _cedula: args._cedula,
                correo: args.correo,
            })
            return usuarioEditado;
        },

        eliminarUsuario: async (parent, args) => {
            if (Object.keys(args).includes('_id') ){
                const usuarioEliminado = await UsuarioModel.findOneAndDelete({
                    _id: args._id
                })
                return usuarioEliminado;
            }else if (Object.keys(args).includes('_cedula') ){
                const usuarioEliminado = await UsuarioModel.findOneAndDelete({
                    _cedula: args._cedula
                })
                return usuarioEliminado;
            }else if (Object.keys(args).includes('correo') ){
                const usuarioEliminado = await UsuarioModel.findOneAndDelete({
                    correo: args.correo
                })
                return usuarioEliminado;
            }
        },
        
        crearProyecto: async (parent, args) => {
            const proyectoCreado = await ProyectosModel.create({
                nombre: args.nombre,
                objetivosGenerales: args.objetivosGenerales,
                objetivosEspecificos: args.objetivosEspecificos,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                lider: args.lider,
                estado: args.estado,
                fase: args.fase
                
            })
            return proyectoCreado;
        },

        editarProyecto: async (parent, args) => {
            const proyectoEditado = await ProyectosModel.findByIdAndUpdate(args._id, {
                _id: args._id,
                nombre: args.nombre,
                objetivosGenerales: args.objetivosGenerales,
                objetivosEspecificos: args.objetivosEspecificos,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                lider: args.lider,
                estado: args.estado,
                fase: args.fase
            })
            return proyectoEditado;
        },

        eliminarProyecto: async (parent, args) => {
            const proyectoEliminado = await ProyectosModel.findOneAndDelete({
                _id: args._id
            })
            return proyectoEliminado;
        }
    }
}


export { resolvers };