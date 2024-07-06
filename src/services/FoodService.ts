import { Food } from "../Types/Food";
import BackendClient from "./BackendClient";
import { BASE_URLS } from "./config";

export default class FoodService extends BackendClient<Food> {
    async getAll(idioma: 'es' | 'en' | 'pt'): Promise<Food[]> {
        const url = BASE_URLS[idioma];
        const options: RequestInit = {
            method: "GET",
        };
        return this.requestAll(url, options);
    }
}