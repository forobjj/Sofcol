import { gql } from "apollo-server-core";

const typeDefs = gql `

scalar Date

type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    cargo: String!
    correo: String!
    _cedula: String! 
}

type Proyecto{
    _id: ID!
    nombre: String!
    objetivosGenerales: String!
    objetivosEspecificos: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    lider: String!
    estado: String!
    fase: String!
}

type Avance{
    _id: ID!
    idProyecto: String!
    fecha: Date!
    descripcion: String!
    observaciones: String!
}

type Query {
    buscarUsuarios: [Usuario]
    buscarProyectos: [Proyecto]
    buscarAvances: [Avance]
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
        _cedula: String
    ):Usuario



    crearProyecto(
        nombre: String!
        objetivosGenerales: String!
        objetivosEspecificos: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        lider: String!
        estado: String!
        fase: String!
    ):Proyecto

    editarProyecto(
        _id: ID!
        nombre: String!
        objetivosGenerales: String!
        objetivosEspecificos: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        lider: String!
        estado: String!
        fase: String!
    ):Proyecto

    eliminarProyecto(
        _id: String
    ):Proyecto


    

    crearAvance(
        idProyecto: String!
        fecha: Date!
        descripcion: String!
        observaciones: String!
    ):Avance

    editarAvance(
        _id: ID!
        idProyecto: String!
        fecha: Date!
        descripcion: String!
        observaciones: String!
    ):Avance

    eliminarAvance(
        _id: String
    ):Avance
}
`

export {typeDefs};