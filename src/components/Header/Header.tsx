import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header>
            <div className="container">
                <div className="logo-container">
                    {/* El logo redirige a la LandingPage*/}
                    <Link to="/" style={{ display: 'block' }}>
                        <img
                            src={'/src/images/logo.png'}
                            className="logo-img"
                            alt="Logo de la empresa"
                        />
                    </Link>
                </div>
                <div className="icon-container">
                    {/*Icono de español*/}
                    <img
                        className='icono-es'
                        src={'https://cdn-icons-png.flaticon.com/128/197/197593.png'}
                        alt="Icono de idioma español"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
