import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Menu from "./components/common/Menu";
import "./App.css";
import Footer from "./components/common/Footer";
import Principal from "./components/pages/Principal";
import Nosotros from "./components/pages/Nosotros";
import Error404 from "./components/pages/Error404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recetas from "./components/pages/Recetas";
import Administrador from "./components/pages/Administrador";
import FormularioRecetas from "./components/pages/recetas/FormularioRecetas";
import FormularioUsuarios from "./components/pages/usuarios/FormularioUsuarios";
import Login from "./components/pages/Login";
import Registro from "./components/pages/Registro";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Principal></Principal>}></Route>
        <Route path="/nosotros" element={<Nosotros></Nosotros>}></Route>
        <Route path="/recetas" element={<Recetas></Recetas>}></Route>
        <Route
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          path="/administrador/crear"
          element={<FormularioRecetas></FormularioRecetas>}
        ></Route>
        <Route
          path="/administrador/crearusuario"
          element={<FormularioUsuarios></FormularioUsuarios>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registro" element={<Registro></Registro>}></Route>
        <Route path="/*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
