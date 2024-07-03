# Menú Multilingüe

Este proyecto es una aplicación de menú donde los usuarios pueden ver las categorías del menú y, al seleccionar cada categoría, ver las comidas incluidas en dicha categoría. Además, maneja la traducción del menú a distintos idiomas.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **Redux**: Librería para el manejo del estado de la aplicación.
- **Redux Toolkit**: Herramientas oficiales para una mejor integración y manejo del estado con Redux.
- **React Router**: Enrutador para manejar la navegación dentro de la aplicación.
- **Slick Carousel**: Para mostrar los elementos en un carrusel.

## Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
    ```sh
    git clone <https://github.com/FlorGubiotti/Front-FoodApp>
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd <NOMBRE_DEL_PROYECTO>
    ```

3. Instala las dependencias:
    ```sh
    npm install
    ```

4. Inicia la aplicación:
    ```sh
    npm run dev
    ```

## Uso

### Selección de Idioma

La aplicación permite cambiar el idioma del menú a través de iconos que representan las banderas de los idiomas disponibles (español, inglés y portugués). Al hacer clic en un icono, el idioma de la aplicación cambiará y se actualizarán las categorías y comidas mostradas.

### Ver Categorías y Comidas

- Al abrir la aplicación, se mostrarán las categorías disponibles en el menú.
- Al seleccionar una categoría, se mostrarán las comidas incluidas en dicha categoría.
- Las comidas se pueden mostrar en un formato de tarjeta o en un carrusel dependiendo de la cantidad de elementos.

## Estructura del Proyecto

- **src/redux/slices/languageSlice.ts**: Maneja el estado del idioma seleccionado.
- **src/redux/store.ts**: Configura el store de Redux.
- **src/components/Header.tsx**: Componente del encabezado que permite cambiar el idioma.
- **src/components/CategoriaSelector.tsx**: Componente que muestra las categorías del menú.
- **src/components/Comidas.tsx**: Componente que muestra las comidas en formato de tarjeta o carrusel.
- **src/components/Categorias.tsx**: Componente que maneja la lógica para filtrar y mostrar las comidas según la categoría seleccionada y el idioma.

## Servicios

Los servicios para obtener los datos de las categorías y comidas se encuentran en `src/services/FoodServices.ts`. Estos servicios realizan las llamadas a la API para obtener los datos en el idioma seleccionado.

