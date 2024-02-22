import { useState, useEffect } from 'react';
import CategoriaSelector from '../components/CategoriaSelector/CategoriaSelector';

const LandingPage = () => {

  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Estado para la categoría seleccionada
  


  // Efecto para filtrar las tareas cuando se selecciona una categoría
  useEffect(() => {
    if (selectedCategory) {
    }
  }, [selectedCategory]);

  return (
    <>
      <CategoriaSelector onSelectCategory={setSelectedCategory} />
    </>
  );
};

export default LandingPage;
