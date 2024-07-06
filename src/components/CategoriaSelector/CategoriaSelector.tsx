import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CategoriaSelector.css';
import CategoryService from '../../services/CategoryService';
import { Categories } from '../../Types/Categories';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface CategoriasSelectorProps {
  onSelectCategory: (categoria: number) => void;
}

const CategoriasSelector: React.FC<CategoriasSelectorProps> = ({ onSelectCategory }) => {
  const language = useSelector((state: RootState) => state.language.language);
  const [categorias, setCategorias] = useState<Categories[]>([]);

  const isValidLanguage = (lang: string): lang is 'es' | 'en' | 'pt' => {
    return ['es', 'en', 'pt'].includes(lang);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isValidLanguage(language)) {
        const categoryService = new CategoryService();
        const categoriasData = await categoryService.getAll(language);
        if (categoriasData) {
          setCategorias(categoriasData);
        }
      }
    };

    fetchData();
  }, [language]);

  return (
    <section className="container mt-3" id="selector-categorias">
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
        {categorias && categorias.map((categoria, index) => (
          <div key={index} className="col">
            <Link
              to={`/comidas/${categoria.id}`}
              className="Categoria btn btn-outline-dark d-flex flex-column align-items-center p-4 py-4 rounded-3 position-relative"
              onClick={() => onSelectCategory(categoria.id)}
            >
              <img className='Categoria-img' src={categoria.icono} alt={categoria.nombre} />
              <div className='CategoriaNombre'>{categoria.nombre}</div>
              <div className='Categoria-borde'></div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriasSelector;
