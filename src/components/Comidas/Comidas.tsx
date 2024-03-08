import './Comidas.css';
import { Food } from '../../Types/Food';
import { useState, useEffect } from 'react';
import { Categories } from '../../Types/Categories';
import { FoodServices } from '../../services/FoodServices';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


{/*Recibe un array de objetos del tipo Food[]*/ }
const Comidas = ({ foods }: { foods: Food[] }) => {


  {/* Obtengo todas las categorias*/ }
  const [categorias, setCategorias] = useState<Categories[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const categoriasData = await FoodServices.getAllCategories();
      setCategorias(categoriasData);
    };
    fetchData();
  }, []);

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

      {/*  MOSTRAR LAS COMIDAS A MODO DE TARJETAS
     
      {categorias.map((categoria, index) => (
        <section className="text-center mb-5" key={index}>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-5">

            {foods
              .filter(food => food.categoria_id === categoria.id)
              .map(food => (
                <div className="col" key={food.id}>
                  <div className="card h-100 card-transparent">
                    <img className="Card-img card-img-top"
                      src={food.imagen}
                      alt={food.nombre}
                    />
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="card-title fw-bold">{food.nombre}</h5>
                        <p className="card-description">{food.descripcion}</p>
                      </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center d-flex flex-column gap-1 align-items-center justify-content-center" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                        <span className="card-price">{food.precio}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}
    */}

      {/*Mapeo todas las categorias*/}
      {categorias.map((categoria, categoriaIndex) => {
        {/*Filtro el id de la categoria con el atributo categoria_id de foods*/}
        const filteredFoods = foods.filter(food => food.categoria_id === categoria.id);
        if (filteredFoods.length > 0) {
          return (
            <div key={categoriaIndex}>
              <h2>{categoria.nombre}</h2>
              <Slider className='slick-slider' {...settings}>
                {filteredFoods.map((food, foodIndex) => (
                  <div key={foodIndex}>
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
