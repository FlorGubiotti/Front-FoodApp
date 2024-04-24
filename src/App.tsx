import { LanguageProvider } from './LanguajeContext/LanguajeContext';
import AppRoutes from './Routes/AppRoutes'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <LanguageProvider>
          <Header />
          <AppRoutes />
          <Footer />
        </LanguageProvider>

      </Router>

    </>
  )
}

export default App