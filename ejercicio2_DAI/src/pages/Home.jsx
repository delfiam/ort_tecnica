import React, { useState, useEffect } from 'react';
import Formulario from '../components/Form';
import ListaNombres from '../components/listaNombres';
import Container from 'react-bootstrap/Container';

export default function Home() {
    const [nombres, setNombres] = useState(() => {
        const stored = localStorage.getItem('nombres');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('nombres', JSON.stringify(nombres));
    }, [nombres]);

    const agregarNombre = (nombre) => {
        setNombres([...nombres, nombre]);
    };

    const eliminarNombre = (index) => {
        setNombres(nombres.filter((_, i) => i !== index));
    };


    return (
        <Container className="vh-100 d-flex justify-content-center align-items-center">
            <div>
                <Formulario onAgregar={agregarNombre} />
                <ListaNombres nombres={nombres} onEliminar={eliminarNombre} />
            </div>
        </Container>

    );
}