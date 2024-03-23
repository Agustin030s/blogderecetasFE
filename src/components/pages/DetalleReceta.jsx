import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import BannerPrincipal from "./aditional/BannerPrincipal";

const DetalleReceta = () => {
  return (
    <>
      <BannerPrincipal texto="Costillar a la Llama"></BannerPrincipal>
      <Container className="my-4 mainContainer">
        <Row className="mb-3 justify-content-center align-items-center">
          <Col md="6">
            <Image
              src="https://i.ytimg.com/vi/I7wh6CBAhcw/maxresdefault.jpg"
              fluid
              rounded
            ></Image>
          </Col>
          <Col md="6">
            <h5>
              <Badge pill bg="danger">
                Carnes
              </Badge>
            </h5>
            <h4>
              Este riquisimo plato, puedes degustarlo en familia, con amigos, es
              excelente por donde lo mires.
            </h4>
            <h5>
              Tiempo de cocción: <Badge>180 minutos</Badge>
            </h5>
          </Col>
        </Row>
        <section className="mb-3">
          <h2>Ingredientes</h2>
          <ul>
            <li>Pan</li>
            <li>Carne</li>
            <li>Carbon</li>
          </ul>
        </section>
        <section className="mb-3">
          <h2>Preparación</h2>
          <p>Toda la cocción de la carne se la hace lentamente etc. etc.</p>
        </section>
        <section className="mb-3">
            <h2>Comentarios</h2>
        </section>
      </Container>
    </>
  );
};

export default DetalleReceta;
