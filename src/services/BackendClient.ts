import { AbstractBackendClient } from "./AbstractBackendClient";

// Clase abstracta que proporciona métodos genéricos para interactuar con una API
export default abstract class BackendClient<T> extends AbstractBackendClient<T> {

  // Método protegido para realizar una solicitud genérica para obtener todos los elementos
  protected async requestAll(path: string, options: RequestInit): Promise<T[]> {
    try {
      const response = await fetch(path, options);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // Implementación del método abstracto de AbstractBackendClient
  abstract getAll(idioma: 'es' | 'en' | 'pt'): Promise<T[]>;
}
