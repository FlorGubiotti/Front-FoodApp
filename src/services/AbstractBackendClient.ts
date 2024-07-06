export abstract class AbstractBackendClient<T> {
    // Método abstracto para obtener todos los elementos
    abstract getAll(idioma: 'es' | 'en' | 'pt'): Promise<T[]>;
}
