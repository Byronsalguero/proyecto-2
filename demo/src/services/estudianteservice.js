import axios from 'axios';

const API_URL = 'http://localhost:3000/api/estudiantes';

export const getEstudiantes = () => {
    return axios.get(API_URL);
};

export const createEstudiante = (estudiante) => {
    return axios.post(API_URL, estudiante);
};

// Métodos para actualizar y eliminar estudiantes
