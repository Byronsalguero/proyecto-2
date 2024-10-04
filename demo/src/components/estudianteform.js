import React, { useState } from 'react';
import { createEstudiante } from '../services/estudianteservices';

const EstudianteForm = () => {
    const [nombre, setNombre] = useState('');
    const [actividad, setActividad] = useState(0);
    const [primerParcial, setPrimerParcial] = useState(0);
    const [segundoParcial, setSegundoParcial] = useState(0);
    const [examenFinal, setExamenFinal] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const estudiante = { nombre, actividad, primerParcial, segundoParcial, examenFinal };
        try {
            await createEstudiante(estudiante);
            // Manejar el éxito (limpiar campos, mostrar mensaje, etc.)
        } catch (error) {
            // Manejar errores
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
            <input type="number" value={actividad} onChange={(e) => setActividad(e.target.value)} placeholder="Actividades (0-35)" />
            <input type="number" value={primerParcial} onChange={(e) => setPrimerParcial(e.target.value)} placeholder="Primer Parcial (0-15)" />
            <input type="number" value={segundoParcial} onChange={(e) => setSegundoParcial(e.target.value)} placeholder="Segundo Parcial (0-15)" />
            <input type="number" value={examenFinal} onChange={(e) => setExamenFinal(e.target.value)} placeholder="Examen Final (0-35)" />
            <button type="submit">Registrar Estudiante</button>
        </form>
    );
};

export default EstudianteForm;
