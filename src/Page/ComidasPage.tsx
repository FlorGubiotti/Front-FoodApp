import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comidas from "../components/Comidas/Comidas";
import { Food } from "../Types/Food";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import FoodService from "../services/FoodService";

const ComidasPage: React.FC = () => {
  const { categoria } = useParams<{ categoria?: string }>(); 
  const [foods, setFoods] = useState<Food[]>([]); //
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);
  const language = useSelector((state: RootState) => state.language.language);

  const isValidLanguage = (lang: string): lang is 'es' | 'en' | 'pt' => {
    return ['es', 'en', 'pt'].includes(lang);
  };

  useEffect(() => {
    const fetchFoods = async () => {
      if (isValidLanguage(language)) {
        const foodService = new FoodService();
        const foodsData = await foodService.getAll(language);
        if (foodsData) {
          setFoods(foodsData);
        }
      }
    };
    fetchFoods();
  }, [language]);


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
