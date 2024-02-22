import { useEffect, useState } from 'react';
import { FoodServices } from '../../services/FoodServices';

import { Food } from '../../Types/Food';
import CategoriaSelector from '../CategoriaSelector/CategoriaSelector';
import Comidas from '../Comidas//Comidas';

const Categorias = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Estado para la categoría seleccionada

  useEffect(() => {
    const fetchFoods = async () => {
      const foodsData = await FoodServices.getAllFoods();
      setFoods(foodsData);
    };

    fetchFoods();
  }, []);

  // Filtra las tareas por la categoría seleccionada
  const filteredFoods = selectedCategory
    ? foods.filter(food => food.categoria.toUpperCase() === selectedCategory.toUpperCase())
    : foods;

  return (
    <div className="container mt-5">
      <CategoriaSelector onSelectCategory={setSelectedCategory} /> {/* Pasa la función para manejar la selección de categoría */}
      <Comidas foods={filteredFoods} />
    </div>
  );
};

export default Categorias;
