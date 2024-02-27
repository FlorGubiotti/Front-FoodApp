import { Food } from "../Types/Food";
import { Categories } from "../Types/Categories";

const BASE_URL = "https://back-foodapp.onrender.com/foods";
const BASE_URL1 = "https://back-foodapp.onrender.com/categories";

export const FoodServices = {

  /*Obtener todas las comidas */
  getAllFoods: async (): Promise<Food[]> => {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    return data;
  },

  /*Obtener todas las categorias de comidas */
  getAllCategories: async (): Promise<Categories[]> => {
    const response = await fetch(`${BASE_URL1}`);
    const data = await response.json();
    return data;
  },

  /*Obtener todas las comidas de una categoria */
  /*Comparo el id de la categoria con categoria_id perteneciente a food, 
  la idea es que cada comida tenga una categoria asociada mediante su id, 
  por lo que al pasarle un id como parámetro, busco en todos los objetos en 
  categoria_id el mismo numero que corresponde a una única categoria*/

  getFoodsInCategory: async (id: number): Promise<Food[]> => {
    const response = await fetch(`${BASE_URL}?categoria_id=${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  }
}
