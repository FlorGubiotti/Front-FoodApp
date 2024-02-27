import { useEffect, useState } from 'react';
import { FoodServices } from '../../services/FoodServices';
import CategoriaSelector from '../CategoriaSelector/CategoriaSelector';
import Comidas from '../Comidas/Comidas';
import { Food } from '../../Types/Food';

const Categorias = () => {

  const [foods, setFoods] = useState<Food[]>([]); // Estado para las comidas 
  const [selectedCategory, setSelectedCategory] = useState<number>(); // Estado para la categoría seleccionada

  {/*Obtengo todas las comidas llamando al método getAllFoods*/}
  useEffect(() => {
    const fetchFoods = async () => {
      const foodsData = await FoodServices.getAllFoods();
      setFoods(foodsData);
    };
    
    fetchFoods();
  }, []); 

  {/*Filtro las comidas según la categoría seleccionada*/}
  const filteredFoods = selectedCategory
  ? foods.filter(food => food.categoria_id === selectedCategory)
  :foods;
  
  return (
    <div className="container mt-5">
      <CategoriaSelector onSelectCategory={setSelectedCategory} />
      <Comidas foods={filteredFoods} />
    </div>
  );
};

export default Categorias;
