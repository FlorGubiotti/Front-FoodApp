import React, { createContext, useState, useContext, ReactNode } from 'react';

// Definir el tipo para el contexto
type LanguageContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

// Crear el contexto con un valor por defecto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Crear un hook personalizado para acceder al contexto
export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext debe usarse dentro de un LanguageProvider');
  }
  return context;
};

// Definir el tipo para los children
type LanguageProviderProps = {
  children: ReactNode;
};

// Proveedor del contexto
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>('es');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
