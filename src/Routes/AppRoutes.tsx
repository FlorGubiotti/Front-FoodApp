import { Route, Routes } from "react-router-dom"
import LandingPage from "../Page/LandingPage"
import ComidasPage from "../Page/ComidasPage"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/comidas/:categoria" element={<ComidasPage/>}/>
    </Routes>
  )
}

export default AppRoutes