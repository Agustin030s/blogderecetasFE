import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import BannerPrincipal from "../aditional/BannerPrincipal";

const RecetaCompleta = ({ receta }) => {
  const ingredientesArray = receta.ingredientes
    .split(",")
    .map((ingrediente) => ingrediente.trim());

  return (
    <>
      <BannerPrincipal texto={receta.nombreReceta}></BannerPrincipal>
      <Container className="my-4 mainContainer">
        <Row className="mb-3 justify-content-center align-items-center">
          <Col md="6">
            <Image src={receta.imagen} fluid rounded></Image>
          </Col>
          <Col md="6">
            <h5>
              <Badge pill bg="danger">
                {receta.categoria}
              </Badge>
            </h5>
            <h4>{receta.descripcionBreve}</h4>
            <h5>
              Tiempo de cocción:{" "}
              <Badge>{receta.tiempoDePreparacion} minutos</Badge>
            </h5>
          </Col>
        </Row>
        <section className="mb-3">
          <h2>Ingredientes</h2>
          <ul>
            {ingredientesArray.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
        </section>
        <section className="mb-3">
          <h2>Preparación</h2>
          <p>{receta.preparacion}</p>
        </section>
      </Container>
    </>
  );
};

export default RecetaCompleta;
