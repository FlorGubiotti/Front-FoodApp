import { Categories } from "../Types/Categories";
import BackendClient from "./BackendClient";
import { BASE_URL_CATEGORIES } from "./config";

export default class CategoryService extends BackendClient<Categories> {
    async getAll(idioma: 'es' | 'en' | 'pt'): Promise<Categories[]> {
        const url = BASE_URL_CATEGORIES[idioma];
        const options: RequestInit = {
            method: "GET",
        };
        return this.requestAll(url, options);
    }
}