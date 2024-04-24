import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CategoriaSelector.css';
import { FoodServices } from '../../services/FoodServices';
import { Categories } from '../../Types/Categories';
import { useLanguageContext } from '../../LanguajeContext/LanguajeContext';

{/*Prop para la categoria seleccionada, se define por el id de la categoria*/ }
interface CategoriasSelectorProps {
    onSelectCategory: (categoria: number) => void;
}

const CategoriasSelector: React.FC<CategoriasSelectorProps> = ({ onSelectCategory }) => {

    const { language } = useLanguageContext();

    const [categorias, setCategorias] = useState<Categories[]>([]); //Estado para las categorias

    {/*Llamada al método getAllCategories*/ }
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
            // Verificar que categoriasData no sea undefined antes de asignarlo
            if (categoriasData) {
                setCategorias(categoriasData);
            }
        };
        fetchData();
    }, [language]);


    return (
        <section className="container mt-3" id="selector-categorias">
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center"> {/*Categorias responsivas*/}

                {/*Recorro todas las categorias con .map*/}
                {categorias && categorias.map((categoria, index) => (
                    <div key={index} className="col">
                        {/*Redirijo hacia comidas/categoria*/}
                        <Link to={`/comidas/${categoria.id}`}
                            className="Categoria btn btn-outline-dark d-flex flex-column align-items-center p-4 py-4 rounded-3 position-relative"
                            /*Al hacer click envío el id de la categoría seleccionada a onSelectedCategory*/
                            onClick={() => onSelectCategory(categoria.id)}>
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
