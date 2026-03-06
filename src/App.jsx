import { Header } from "./components/Header"
import { Careers } from "./pages/careers"
import { Comunidad } from "./pages/comunidad"
import { Contacto } from "./pages/Contacto"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"

export const App = () => {
  return (
    <>
      <Header />
      {/*<Home /> */}
      {/* <Careers /> */}
      <Comunidad />
      {/*  <Contacto/> */}
      {/* <Login/> */}
    </>
  )
}
