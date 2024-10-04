import React, { useEffect, useState } from 'react';
import { getEstudiantes } from '../services/Estudianteservices';

const EstudianteList = () => {
    const [estudiantes, setEstudiantes] = useState([]);

    useEffect(() => {
        const fetchEstudiantes = async () => {
            const response = await getEstudiantes();
            setEstudiantes(response.data);
        };
        fetchEstudiantes();
    }, []);

    return (
        <ul>
            {estudiantes.map(est => (
                <li key={est.id}>{est.nombre}: {est.puntajeTotal}</li>
            ))}
        </ul>
    );
};

export default EstudianteList;
