import { gql } from "apollo-server-core";

const typeDefs = gql `

type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    cargo: String!
    correo: String!
    _cedula: String! 
}
type Query {
    Buscar: [Usuario]
}

type Mutation{
    crearUsuario(
        nombre: String!
        apellido: String!
        cargo: String!
        correo: String!
        _cedula: String!
    ):Usuario
    
    editarUsuario(
        _id: ID!
        nombre: String!
        apellido: String!
        cargo: String!
        correo: String!
        _cedula: String!
    ):Usuario

    eliminarUsuario(
        _id: String
        correo: String
        _cedula: String
    ):Usuario
}
`

export {typeDefs};