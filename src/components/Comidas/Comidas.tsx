import './Comidas.css';
import { Food } from '../../Types/Food';
import { useState, useEffect } from 'react';
import { Categories } from '../../Types/Categories';
import { FoodServices } from '../../services/FoodServices';


{/*Recibe un array de objetos del tipo Food[]*/}
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


  return (
    <section className="container-fluid mt-5" id="categorias"> 

      {/*Utilzo .map para recorrer todas las categorias*/}
      {categorias.map((categoria, index) => (
        <section className="text-center mb-5" key={index}>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-5">

            {/* Filtro las comidas por el id de la categoria*/}
            {foods
              .filter(food => food.categoria_id === categoria.id)
              
              /*Muestro todas las comidas*/
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

    </section>
  );
};

export default Comidas;
