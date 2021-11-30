import conectarBD from "./db/db";
import { AvancesModel } from "./models/avance";
import { ProyectoModel } from "./models/proyecto";
import { UsuarioModel } from "./models/usuarios";

const main = async () => {
    await conectarBD();

    //CRUD USUARIOS

    //crear usuarios
    // await UsuarioModel.create({
    //     nombre: "Alexander",
    //     apellido: "Arias",
    //     cargo: "Estudiante",
    //     correo: "alexander@micorreo.com",
    //     _cedula : "12345",
    // })
    //     .then((u) => {
    //         console.log('Usuario creado creado', u);
    //     }).catch((e) => {
    //         console.log('Error al crear usuario', e);
    //     });

    //Leer usuarios
    // await UsuarioModel.find()
    //  .then((u) => {
    //      console.log('Usuarios', u);
    //  })
    //  .catch((e) => {
    //      console.log('Error al obtener usuarios', e);
    //  });

    //Actualizar usuario
    // await UsuarioModel.findOneAndUpdate(
    //     { _cedula: "12345" },
    //     {
    //         nombre: "Alex",
    //         apellido: "Arbeláez",
    //         cargo: "Lider",
    //     }
    // )
    //     .then((u) => {
    //         console.log('Usuario actualizado', u);
    //     })
    //     .catch((e) => {
    //         console.log('Error al actualizar usuario', e);
    //     });

    //Eliminar usuario
    // await UsuarioModel.findOneAndDelete (
    //     { _cedula: "12345" }
    // )
    //     .then((u) => {
    //         console.log('Usuario eliminado', u);
    //     })
    //     .catch((e) => {
    //         console.log('Error al eliminar Usuario', e);
    //     });

    //CRUD AVANCE

    //Crear avance
    // await AvancesModel.create({
    //     idProyecto: "123",
    //     fecha: "10/10/10",
    //     descripcion: "probando avance ",
    //     observaciones: "Administrador prueba",
    // })
    // .then ((u) => {
    //         console.log ('Avance creado', u);
    //     }).catch ((e) => {
    //         console.log ('Error al crear Avance', e);
    //    });    

    //Leer avances
    // await AvancesModel.find()
    //  .then((u) => {
    //      console.log('Avances', u);
    //  })
    //  .catch((e) => {
    //      console.log('Error al obtener avances', e);
    //  });

    //Actualizar avance
    // await AvancesModel.findOneAndUpdate (
    //     { idProyecto: 123 },
    //     {
    //         fecha: "03/10/21",
    //         descripcion: "Cambio avance",
    //         observaciones: "Modificando avance",
    //     }
    // )
    // .then((u) => {
    //     console.log('Avance actualizado', u);
    // })
    // .catch((e) => {
    //     console.log('Error al actualizar avance', e);
    // });

    //Eliminar avance
    // await AvancesModel.findOneAndDelete (
    //     { idProyecto: "123" }
    // )
    //     .then((u) => {
    //         console.log('Avance eliminado', u);
    //     })
    //     .catch((e) => {
    //         console.log('Error al eliminar avance', e);
    //     });

    //CRUD PROYECTO

    //Crear proyecto
    // await ProyectoModel.create({
    //     nombre: "Proyecto prueba",
    //     objetivosGenerales: "Fución proyecto",
    //     objetivosEspecificos: "Crear proyecto",
    //     presupuesto: "12345",
    //     fechaInicio: "03/10/92",
    //     fechaFin: "03/10/21",
    //     cedulaLider: "54321",
    //     estado: "Activo",
    //     fase: "Desarrollo",
    // })
    //     .then((u) => {
    //         console.log('Proyecto creado', u);
    //     }).catch((e) => {
    //         console.log('Error al crear Proyecto', e);
    //     });

    //Leer proyectos

    // await ProyectoModel.find()
    //  .then((u) => {
    //      console.log('Proyectos', u);
    //  })
    //  .catch((e) => {
    //      console.log('Error al obtener Proyectos', e);
    //  });

    //Actualizar proyecto

    // await ProyectoModel.findOneAndUpdate (
    //     { nombre: "Proyecto prueba" },
    //     {
    //         objetivosGenerales: "Revisar proyecto",
    //     objetivosEspecificos: "Encontrar error en el proyecto",
    //     presupuesto: "1111",
    //     estado: "Activo",
    //     fase: "Desarrollo",
    //     }
    // )
    // .then((u) => {
    //     console.log('Proyecto actualizado', u);
    // })
    // .catch((e) => {
    //     console.log('Error al actualizar Proyecto', e);
    // });

    //Eliminar proyecto

    //  await ProyectoModel.findOneAndDelete (
    //     { nombre: "Proyecto prueba" }
    // )
    //     .then((u) => {
    //         console.log('Proyecto eliminado', u);
    //     })
    //     .catch((e) => {
    //         console.log('Error al eliminar Proyecto', e);
    //     });
};

main();