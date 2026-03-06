import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Careers } from "./pages/careers"
import { Comunidad } from "./pages/comunidad"
import { Contacto } from "./pages/Contacto"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"


export const App = () => {
  return (
    <>
      <BrowserRouter>

      <Header/>

        <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/Careers" element={<Careers/>}/>
        <Route path="/Comunidad" element={<Comunidad/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="/Login" element={<Login/>}/>
        </ Routes>

      </BrowserRouter>
    </>
  )
}
