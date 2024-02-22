import { Food } from "../Types/Food";

const BASE_URL = "http://localhost:3000/foods";

export const FoodServices = {

    //Obtener todas las tareas
    getAllFoods: async (): Promise<Food[]> => {
        const response = await fetch(`${BASE_URL}`);
        const data = await response.json();
        return data;
    },

    //Obtener una tarea
    getOneFood: async (id: number): Promise<Food> => {
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();
        return data;
    },

    //Obtener tareas en una categoria
    getFoodsInCategory: async (category: string): Promise<Food[]> => {
        const response = await fetch(`${BASE_URL}?estado=${category}`);
        const data = await response.json();
        return data;
    }
}