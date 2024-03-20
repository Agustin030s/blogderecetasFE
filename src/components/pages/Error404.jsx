import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import error404 from "../../assets/error404.jpg";

const Error404 = () => {
  return (
    <Container className="my-3">
      <Row className="justify-content-center align-items-center">
        <Col md="6">
          <h1 className="text-danger">Oppps!</h1>
          <p className="text-justify">
            Parece que intentaste encender el fuego en un lugar oscuro.
            ¡Nosotros también lo hemos intentado! Pero a veces, incluso los
            mejores chefs se encuentran con un pequeño error. Te sugerimos
            volver a la página principal y comenzar de nuevo tu aventura
            culinaria. ¡No te preocupes, estaremos aquí para guiarte en el
            camino hacia deliciosas recetas!
          </p>
          <Link className="btn btn-danger" to="/">Volver al Inicio</Link>
        </Col>
        <Col md="6">
          <Image src={error404} fluid></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;
