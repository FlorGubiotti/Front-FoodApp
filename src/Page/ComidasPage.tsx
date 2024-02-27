import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comidas from "../components/Comidas/Comidas";
import { FoodServices } from "../services/FoodServices";
import { Food } from "../Types/Food"; 

const ComidasPage: React.FC = () => {
  const { categoria } = useParams<{ categoria?: string }>(); 
  const [foods, setFoods] = useState<Food[]>([]); //
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const foodsData = await FoodServices.getAllFoods();
      setFoods(foodsData);
    }
    fetchFoods();
  }, []);


  useEffect(() => {
    // Filtrar las comidas según la categoría seleccionada
    if (categoria) {
      const filtered = foods.filter(food => food.categoria_id.toString() === categoria); // Convertir a string
      setFilteredFoods(filtered); // Actualizar el estado con las comidas filtradas
    } 
  }, [categoria, foods]);

  return <Comidas foods={filteredFoods} />;
};

export default ComidasPage;
