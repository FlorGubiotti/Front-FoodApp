import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comidas from "../components/Comidas/Comidas";
import { FoodServices } from "../services/FoodServices";
import { Food } from "../Types/Food"; 
import { useLanguageContext } from "../LanguajeContext/LanguajeContext";

const ComidasPage: React.FC = () => {
  const { categoria } = useParams<{ categoria?: string }>(); 
  const [foods, setFoods] = useState<Food[]>([]); //
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);
  const { language } = useLanguageContext();

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
      // Verificar que foodsData no sea undefined antes de asignarlo
      if (foodsData) {
        setFoods(foodsData);
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
