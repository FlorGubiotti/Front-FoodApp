import { Food } from "../Types/Food";
import { Categories } from "../Types/Categories";

const BASE_URLS = {
  es: "https://back-foodapp.onrender.com/foodsEspaniol",
  en: "https://back-foodapp.onrender.com/foodsEnglish",
  pt: "https://back-foodapp.onrender.com/foodsPortugues",
};

const BASE_URL_CATEGORIES = {
  es: "https://back-foodapp.onrender.com/categoriesEspaniol",
  en: "https://back-foodapp.onrender.com/categoriesEnglish",
  pt: "https://back-foodapp.onrender.com/categoriesPortugues",
};

export const FoodServices = {
  getAllFoods: async (idioma: 'es' | 'en' | 'pt'): Promise<Food[]> => {
    const response = await fetch(`${BASE_URLS[idioma]}`);
    const data = await response.json();
    return data;
  },

  getAllCategories: async (idioma: 'es' | 'en' | 'pt'): Promise<Categories[]> => {
    const response = await fetch(`${BASE_URL_CATEGORIES[idioma]}`);
    const data = await response.json();
    return data;
  },
};
