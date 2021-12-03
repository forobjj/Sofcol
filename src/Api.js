import axios from 'axios';

const API_URL = "http://localhost:3001/proyecto"

export const listProyect = async () => {
    return await axios.get(API_URL);

};

export const registerProyects = async (newProyect) => {
    try {
        const response = await axios({
            url: `${API_URL}`,
            method: 'POST',
            data: {
                nombre: newProyect.nombre,
                objetivosGenerales: newProyect.objetivosGenerales,
                objetivosEspecificos: newProyect.objetivosEspecificos,
                presupuesto: newProyect.presupuesto,
                fechaInicio: newProyect.fechaInicio,
                fechaFin: newProyect.fechaFin,
                nombreLider: newProyect.nombreLider,
                cedulaLider: newProyect.cedulaLider,
                Estado: newProyect.Estado,
                fase: newProyect.fase
                
            },
        })
        return response

    } catch (e) {
        console.log(e)
    }
}

export const getProyect = async (proyectId) => {
    try {
        const response = await axios({
            url: `${API_URL}/${proyectId}`,
            method: 'GET',
        })
        return response

    } catch (e) {
        console.log(e)
    }
}

export const deleteProyect = async (proyectId) => {
    try {
        const response = await axios({
            url: `${API_URL}/${proyectId}`,
            method: 'DELETE',
            data: { id: proyectId },
        })
        return response

    } catch (e) {
        console.log(e)
    }
}

export const updateProyect = async (proyectId, updateProyect) => {
    try {
        const response = await axios({
            url: `${API_URL}/${proyectId}`,
            method: 'PATCH',
            data: {
                nombre: updateProyect.nombre,
                objetivosGenerales: updateProyect.objetivosGenerales,
                objetivosEspecificos: updateProyect.objetivosEspecificos,
                presupuesto: updateProyect.presupuesto,
                fechaInicio: updateProyect.fechaInicio,
                fechaFin: updateProyect.fechaFin,
                nombreLider: updateProyect.nombreLider,
                cedulaLider: updateProyect.cedulaLider,
                Estado: updateProyect.Estado,
                fase: updateProyect.fase
                
            },
        })
        return response

    } catch (e) {
        console.log(e)
    }
};
