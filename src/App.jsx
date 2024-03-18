import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Menu from "./components/common/Menu";
import "./App.css";
import Footer from "./components/common/Footer";
import Principal from "./components/pages/Principal";
import Nosotros from "./components/pages/Nosotros";

function App() {
  return (
    <>
      <Menu></Menu>
      {/* <Principal></Principal> */}
      <Nosotros></Nosotros>
      <Footer></Footer>
    </>
  );
}

export default App;
