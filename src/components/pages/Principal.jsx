import BannerPrincipal from "./aditional/BannerPrincipal";
import { Container } from "react-bootstrap";
import InfoAdicional from "./aditional/InfoAdicional";
import Introduccion from "./aditional/Introduccion";
import RecetasDestacadas from "./aditional/RecetasDestacadas";

const Principal = () => {
  return (
    <div className="mainContainer">
      <BannerPrincipal></BannerPrincipal>
      <Container>
        <Introduccion></Introduccion>
        <RecetasDestacadas></RecetasDestacadas>
        <InfoAdicional></InfoAdicional>
      </Container>
    </div>
  );
};

export default Principal;
