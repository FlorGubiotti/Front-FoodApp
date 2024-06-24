import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CategoriaSelector.css';
import { FoodServices } from '../../services/FoodServices';
import { Categories } from '../../Types/Categories';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface CategoriasSelectorProps {
  onSelectCategory: (categoria: number) => void;
}

const CategoriasSelector: React.FC<CategoriasSelectorProps> = ({ onSelectCategory }) => {
  const language = useSelector((state: RootState) => state.language.language);
  const [categorias, setCategorias] = useState<Categories[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let categoriasData: Categories[] | undefined;
      if (language === 'es') {
        categoriasData = await FoodServices.getAllCategories();
      } else if (language === 'en') {
        categoriasData = await FoodServices.getAllCategoriesEnglish();
      } else if (language === 'pt') {
        categoriasData = await FoodServices.getAllCategoriesPortugues();
      }
      if (categoriasData) {
        setCategorias(categoriasData);
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
