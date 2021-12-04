import { UsuarioModel } from "../models/usuarios";

const resolvers = {
    Query:{
        Buscar: async (parent, args) => {
            const usuarios = await UsuarioModel.find() 
            return usuarios;
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
            
        }
    }
}


export { resolvers };