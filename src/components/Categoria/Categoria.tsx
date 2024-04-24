import { useEffect, useState } from 'react';
import { FoodServices } from '../../services/FoodServices';
import CategoriaSelector from '../CategoriaSelector/CategoriaSelector';
import Comidas from '../Comidas/Comidas';
import { Food } from '../../Types/Food';
import { useLanguageContext } from '../../LanguajeContext/LanguajeContext';

const Categorias = () => {

  const [foods, setFoods] = useState<Food[]>([]); // Estado para las comidas 
  const [selectedCategory, setSelectedCategory] = useState<number>(); // Estado para la categoría seleccionada
  const { language } = useLanguageContext();

  {/*Obtengo todas las comidas llamando al método getAllFoods*/ }
  useEffect(() => {
    const fetchFoods = async () => {
      let foodsData: Food[] | undefined;
      if (language === 'es') {
        foodsData = await FoodServices.getAllFoods();
      } else if (language === 'en') {
        foodsData = await FoodServices.getAllFoodsEnglish();
      } else if (language === 'it') {
        foodsData = await FoodServices.getAllFoodsItaliano();
      }
      // Verificar que foodsData no sea undefined antes de asignarlo
      if (foodsData) {
        setFoods(foodsData);
      }
    };
    fetchFoods();
  }, [language]);

  // Filtrar las comidas según la categoría seleccionada y el idioma
  const filteredFoods = selectedCategory
    ? foods.filter(food => food.categoria_id === selectedCategory)
    : foods;

  return (
    <div className="container mt-5">
      {/* Renderizar el selector de categorías y pasar la función de selección */}
      <CategoriaSelector onSelectCategory={setSelectedCategory} />
      {/* Pasar las comidas filtradas al componente Comidas */}
      <Comidas foods={filteredFoods} />
    </div>
  );
};

export default Categorias;
