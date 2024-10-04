import React from 'react';
import EstudianteForm from './components/estudianteform';
import EstudianteList from './components/estudianteslist';

const App = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Sistema de Ingreso de Notas</h1>
            <EstudianteForm />
            <h2>Lista de Estudiantes</h2>
            <EstudianteList />
        </div>
    );
};

export default App;
