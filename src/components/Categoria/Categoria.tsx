import { useEffect, useState } from 'react';
import { FoodServices } from '../../services/FoodServices';
import CategoriaSelector from '../CategoriaSelector/CategoriaSelector';
import Comidas from '../Comidas/Comidas';
import { Food } from '../../Types/Food';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Categorias: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>();
  const language = useSelector((state: RootState) => state.language.language);

  useEffect(() => {
    const fetchFoods = async () => {
      let foodsData: Food[] | undefined;
      if (language === 'es') {
        foodsData = await FoodServices.getAllFoods();
      } else if (language === 'en') {
        foodsData = await FoodServices.getAllFoodsEnglish();
      } else if (language === 'pt') {
        foodsData = await FoodServices.getAllFoodsPortugues();
      }
      if (foodsData) {
        setFoods(foodsData);
      }
    };
    fetchFoods();
  }, [language]);

  const filteredFoods = selectedCategory
    ? foods.filter(food => food.categoria_id === selectedCategory)
    : foods;

  return (
    <div className="container mt-5">
      <CategoriaSelector onSelectCategory={setSelectedCategory} />
      <Comidas foods={filteredFoods} />
    </div>
  );
};

export default Categorias;