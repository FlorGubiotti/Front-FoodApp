import { Link } from 'react-router-dom';
import '../../index.css';
import './Header.css';
import { useLanguageContext } from '../../LanguajeContext/LanguajeContext';

const Header: React.FC = () => {
    const { setLanguage } = useLanguageContext(); // Obtengo la función para cambiar el idioma del contexto

    // Función para cambiar el idioma al español
    const handleSetSpanish = () => {
        setLanguage('es');
    };

    // Función para cambiar el idioma al inglés
    const handleSetEnglish = () => {
        setLanguage('en');
    };

    // Función para cambiar el idioma al portugues
    const handleSetPortuguese = () => {
        setLanguage('pt');
    };

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
                        className='icono'
                        src={'https://cdn-icons-png.flaticon.com/128/197/197593.png'}
                        alt="Icono de idioma español"
                        onClick={handleSetSpanish}
                    />
                    <img
                        className='icono'
                        src={'https://cdn-icons-png.flaticon.com/128/8363/8363075.png'}
                        alt= "Icono de idioma ingles"
                        onClick={handleSetEnglish}
                    />
                    <img
                        className='icono'
                        src= {'https://cdn-icons-png.flaticon.com/128/3909/3909361.png'}
                        alt= "Icono de idioma portugues"
                        onClick={handleSetPortuguese}
                    />

                </div>
            </div>
        </header>
    );
}

export default Header;
