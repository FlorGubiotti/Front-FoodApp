import React from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';

const Header: React.FC = () => {
    return (
        <header>
            <div className="container">
                <div className="logo-container">
                    <Link to="/" style={{ display: 'block' }}> {/* Añadir display: block al enlace */}
                        <img
                            src={'/src/images/logo.png'}
                            className="logo-img"
                            alt="Logo de la empresa"
                        />
                    </Link>
                </div>
                {/* Otros elementos del header, como menús de navegación, pueden agregarse aquí */}
            </div>
        </header>
    );
}

export default Header;
