import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Menu from "./components/common/Menu";
import "./App.css";
import Footer from "./components/common/Footer";
import Principal from "./components/pages/Principal";

function App() {
  return (
    <>
      <Menu></Menu>
      <Principal></Principal>
      <Footer></Footer>
    </>
  );
}

export default App;
