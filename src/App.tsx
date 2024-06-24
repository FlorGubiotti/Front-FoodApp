import AppRoutes from './Routes/AppRoutes'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
          <Header />
          <AppRoutes />
          <Footer />
      </Router>

    </>
  )
}

export default App