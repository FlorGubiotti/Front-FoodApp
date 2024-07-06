import DataModel from "./DataModel";

{/*Interface de Categories, muestra la estructura que tiene el db.json*/}

export interface Categories extends DataModel<Categories>{
    nombre: string;
    icono: string;
}