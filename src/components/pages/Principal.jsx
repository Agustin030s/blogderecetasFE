import BannerPrincipal from "./aditional/BannerPrincipal";
import { Container } from "react-bootstrap";
import InfoAdicional from "./aditional/InfoAdicional";
import Introduccion from "./aditional/Introduccion";

const Principal = () => {
  return (
    <div className="mainContainer">
      <BannerPrincipal></BannerPrincipal>
      <Container>
        <Introduccion></Introduccion>
        <h2>Recetas destacadas</h2>
        <InfoAdicional></InfoAdicional>
      </Container>
    </div>
  );
};

export default Principal;
