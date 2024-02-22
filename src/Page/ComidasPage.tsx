import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comidas from "../components/Comidas/Comidas";
import { Food } from "../Types/Food";
import { FoodServices } from "../services/FoodServices";

const ComidasPage: React.FC = () => {
  const { categoria } = useParams<{ categoria?: string }>();
  const [foods, setFoods] = useState<Food[]>([]);
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const foodsData = await FoodServices.getAllFoods();
      setFoods(foodsData);
    };

    fetchFoods();
  }, []);

  useEffect(() => {
    if (categoria) {
      const filtered = foods.filter(food => food.categoria.toUpperCase() === categoria.toUpperCase());
      setFilteredFoods(filtered);
    } else {
      setFilteredFoods(foods);
    }
  }, [categoria, foods]);

  return (
    <>
      <Comidas foods={filteredFoods} />
    </>
  );
}

export default ComidasPage;
