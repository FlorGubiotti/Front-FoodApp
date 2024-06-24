import { useDispatch } from 'react-redux';
import { setLanguage } from '../../redux/slices/languageSlice';
import { Link } from 'react-router-dom';
import '../../index.css';
import './Header.css';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleSetSpanish = () => {
    dispatch(setLanguage('es'));
  };

  const handleSetEnglish = () => {
    dispatch(setLanguage('en'));
  };

  const handleSetPortuguese = () => {
    dispatch(setLanguage('pt'));
  };

  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <Link to="/" style={{ display: 'block' }}>
            <img
              src={'/src/images/logo.png'}
              className="logo-img"
              alt="Logo de la empresa"
            />
          </Link>
        </div>
        <div className="icon-container">
          <img
            className="icono"
            src={'https://cdn-icons-png.flaticon.com/128/197/197593.png'}
            alt="Icono de idioma español"
            onClick={handleSetSpanish}
          />
          <img
            className="icono"
            src={'https://cdn-icons-png.flaticon.com/128/8363/8363075.png'}
            alt="Icono de idioma ingles"
            onClick={handleSetEnglish}
          />
          <img
            className="icono"
            src={'https://cdn-icons-png.flaticon.com/128/9906/9906449.png'}
            alt="Icono de idioma portugues"
            onClick={handleSetPortuguese}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
