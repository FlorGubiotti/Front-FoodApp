import { Route, Routes } from "react-router-dom"
import LandingPage from "../Page/LandingPage"
import ComidasPage from "../Page/ComidasPage"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        {/*Manejo de las rutas para LandingPage y ComidasPage*/}
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/comidas/:categoria" element={<ComidasPage/>}/>
    </Routes>
  )
}

export default AppRoutes