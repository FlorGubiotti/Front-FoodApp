
{/*Interface de Food, muestra la estructura que tiene el db.json*/}

export interface Food {
    id: number
    nombre: string;
    descripcion: string;
    imagen: string;
    precio: string;
    categoria_id: number;
}

