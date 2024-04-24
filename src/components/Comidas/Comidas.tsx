import './Comidas.css';
import { Food } from '../../Types/Food';
import { useState, useEffect } from 'react';
import { Categories } from '../../Types/Categories';
import { FoodServices } from '../../services/FoodServices';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useLanguageContext } from '../../LanguajeContext/LanguajeContext';


{/*Recibe un array de objetos del tipo Food[]*/ }
const Comidas = ({ foods }: { foods: Food[] }) => {

  const { language } = useLanguageContext();

  {/* Obtengo todas las categorias*/ }
  const [categorias, setCategorias] = useState<Categories[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let categoriasData: Categories[] | undefined;
      if (language === 'es') {
        categoriasData = await FoodServices.getAllCategories();
      } else if (language === 'en') {
        categoriasData = await FoodServices.getAllCategoriesEnglish();
      } else if (language === 'it') {
        categoriasData = await FoodServices.getAllCategoriesItaliano();
      }
      // Verificar que categoriasData no sea undefined antes de asignarlo
      if (categoriasData) {
        setCategorias(categoriasData);
      }
    };
    fetchData();
  }, [language]);

  //Configuracion para el slide
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Dispositivos con pantallas hasta 1024px
        settings: {
          slidesToShow: 3, // Ajusta según la cantidad deseada de slides visibles
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600, // Dispositivos con pantallas hasta 600px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480, // Dispositivos con pantallas hasta 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <section className="container-fluid mt-5" id="categorias">
  
      {/*Mapeo todas las categorias*/}
      {categorias.map((categoria, categoriaIndex) => {
        {/*Filtro el id de la categoria con el atributo categoria_id de foods*/ }
        const filteredFoods = foods.filter(food => food.categoria_id === categoria.id);
        if (filteredFoods.length > 0) {
          return (
            <div className="row" key={categoriaIndex}>
              <h2 className="col-12 mb-4">{categoria.nombre}</h2>
              <Slider className='slick-slider col-12' {...settings}>
                {filteredFoods.map((food, foodIndex) => (
                  <div key={foodIndex} className="col-12 col-md-6 col-xl-4 mb-4">
                    <div className="card h-100 card-transparent">
                      <img
                        className="card-img-top"
                        src={food.imagen}
                        alt={food.nombre}
                      />
                      <div className="card-body p-4">
                        <div className="text-center">
                          <h5 className="card-title fw-bold">{food.nombre}</h5>
                          <p className="card-description">{food.descripcion}</p>
                          <span className="card-price">{food.precio}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          );
        }
        return null;
      })}
    </section>
  );
  
};

export default Comidas;
