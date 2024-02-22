import React from 'react';
import { Link } from 'react-router-dom';

interface CategoriasSelectorProps {
    onSelectCategory: (categoria: string) => void;
}

const CategoriasSelector: React.FC<CategoriasSelectorProps> = ({ onSelectCategory }) => {
    const categorias = [
        { nombre: 'PAPASFRITAS', icono: '/src/images/icons/papas-fritas.png' },
        { nombre: 'PARAPICAR', icono: '/src/images/icons/para-picar.png' },
        { nombre: 'BRUSCHETTAS', icono: '/src/images/icons/bruschetta.png' },
        { nombre: 'PIZZAS', icono: '/src/images/icons/pizza.png' },
        { nombre: 'SANDWICHES', icono: '/src/images/icons/sandwiches.png' },
        { nombre: 'LOMOS', icono: '/src/images/icons/sandwiches.png' },
        { nombre: 'HAMBURGUESAS', icono: '/src/images/icons/hamburguesa.png' },
        { nombre: 'VEGGIE', icono: '/src/images/icons/veggie.png' },
        { nombre: 'ENSALADAS', icono: '/src/images/icons/ensaladas.png' },
        { nombre: 'TABLAS', icono: '/src/images/icons/para-picar.png' },
        { nombre: 'SINTACC', icono: '/src/images/icons/sin-tacc.png' },
        { nombre: 'CERVEZAS', icono: '/src/images/icons/cervezas.png' },
        { nombre: 'TRAGOS', icono: '/src/images/icons/tragos.png' },
        { nombre: 'GASEOSAS', icono: '/src/images/icons/gaseosas.png' },
        { nombre: 'POSTRES', icono: '/src/images/icons/postres.png' },
    ];



    return (
        <section className="container mt-3" id="selector-categorias">
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
                {categorias.map((categoria, index) => (
                    <div key={index} className="col">
                         <Link to={`/comidas/${categoria.nombre.toLowerCase()}`} 
                                className="btn btn-outline-dark d-flex flex-column align-items-center p-4 py-4 rounded-3 position-relative" 
                                style={{ textDecoration: 'none' ,
                                margin: '20px auto',
                                marginBottom: '40px',
                                width: '150px',
                                height: '150px',
                                cursor: 'pointer',
                                color: 'white',
                                overflow: 'hidden'}} 
                                onClick={() => onSelectCategory(categoria.nombre)}>
                            <img src={categoria.icono} alt={categoria.nombre} style={{ width: '70%', height: 'auto' }} />
                            <div style={{ position: 'absolute', bottom: '20px', left: '0', right: '0', textAlign: 'center' }}>{categoria.nombre}</div>
                            <div style={{ position: 'absolute', top: '0px', left: '0', right: '0', bottom: '0', border: '5px solid white', borderRadius: '1rem' }}></div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoriasSelector;
