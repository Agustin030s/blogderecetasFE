import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Menu from "./components/common/Menu";
import "./App.css";
import Footer from "./components/common/Footer";
import Principal from "./components/pages/Principal";
import Nosotros from "./components/pages/Nosotros";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Principal></Principal>}></Route>
        <Route path="/nosotros" element={<Nosotros></Nosotros>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
