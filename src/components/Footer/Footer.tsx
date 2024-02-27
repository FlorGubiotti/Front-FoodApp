import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
        {/* Botón de "volver" que redirige a la landing page */}
        <Link to="/"  className="btn btn-primary footer-btn">Volver</Link>
        
      </footer>
    )
  }
  
  export default Footer;
  