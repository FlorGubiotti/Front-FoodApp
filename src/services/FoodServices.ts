import { Food } from "../Types/Food";
import { Categories } from "../Types/Categories";

const BASE_URL = "https://back-foodapp.onrender.com/foodsEspaniol";
const BASE_URL1 = "https://back-foodapp.onrender.com/categoriesEspaniol";
const BASE_URLINGLES = "https://back-foodapp.onrender.com/foodsEnglish";
const BASE_URL1INGLES = "https://back-foodapp.onrender.com/categoriesEnglish";
const BASE_URLPORTUGUES = "https://back-foodapp.onrender.com/foodsPortugues";
const BASE_URL1PORTUGUES = "https://back-foodapp.onrender.com/categoriesPortugues";

export const FoodServices = {

  /*Obtener todas las comidas en español*/
  getAllFoods: async (): Promise<Food[]> => {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();

    return data;
  },

  /*Obtener todas las categorias de comidas en español*/
  getAllCategories: async (): Promise<Categories[]> => {
    const response = await fetch(`${BASE_URL1}`);
    const data = await response.json();
    return data;
  },

  /*Obtener todas las comidas de una categoria en español*/
  /*Comparo el id de la categoria con categoria_id perteneciente a food, 
  la idea es que cada comida tenga una categoria asociada mediante su id, 
  por lo que al pasarle un id como parámetro, busco en todos los objetos en 
  categoria_id el mismo numero que corresponde a una única categoria*/

  getFoodsInCategory: async (id: number): Promise<Food[]> => {
    const response = await fetch(`${BASE_URL}?categoria_id=${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  },

  /*Obtener todas las comidas en ingles*/
  getAllFoodsEnglish: async (): Promise<Food[]> => {
    const response = await fetch(`${BASE_URLINGLES}`);
    const data = await response.json();

    return data;
  },

  /*Obtener todas las categorias de comidas en ingles*/
  getAllCategoriesEnglish: async (): Promise<Categories[]> => {
    const response = await fetch(`${BASE_URL1INGLES}`);
    const data = await response.json();
    return data;
  },

  /*Obtener todas las comidas de una categoria en ingles*/
  getFoodsInCategoryEnglish: async (id: number): Promise<Food[]> => {
    const response = await fetch(`${BASE_URLINGLES}?categoria_id=${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  },

   /*Obtener todas las comidas en portugues*/
   getAllFoodsPortugues: async (): Promise<Food[]> => {
    const response = await fetch(`${BASE_URLPORTUGUES}`);
    const data = await response.json();
    
    return data;
  },

  /*Obtener todas las categorias de comidas en portugues*/
  getAllCategoriesPortugues: async (): Promise<Categories[]> => {
    const response = await fetch(`${BASE_URL1PORTUGUES}`);
    const data = await response.json();
    return data;
  },

  /*Obtener todas las comidas de una categoria en portugues*/
  getFoodsInCategoryPortuges: async (id: number): Promise<Food[]> => {
    const response = await fetch(`${BASE_URLPORTUGUES}?categoria_id=${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  }
}
