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

  const isValidLanguage = (lang: string): lang is 'es' | 'en' | 'pt' => {
    return ['es', 'en', 'pt'].includes(lang);
  };

  useEffect(() => {
    const fetchFoods = async () => {
      if (isValidLanguage(language)) {
        const foodsData = await FoodServices.getAllFoods(language);
        if (foodsData) {
          setFoods(foodsData);
        }
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