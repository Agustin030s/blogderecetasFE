import BannerPrincipal from "./aditional/BannerPrincipal";
import { Container } from "react-bootstrap";
import InfoAdicional from "./aditional/InfoAdicional";

const Principal = () => {
  return (
    <div className="mainContainer">
      <BannerPrincipal></BannerPrincipal>
      <Container>
        <h2>Nosotros</h2>
        <h2>Recetas destacadas</h2>
        <InfoAdicional></InfoAdicional>
      </Container>
    </div>
  );
};

export default Principal;
