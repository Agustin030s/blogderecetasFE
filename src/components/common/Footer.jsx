import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="py-5 text-center">
      <div className="d-flex flex-column footerContainer">
        <Container className="mb-2 py-3">
          <Row>
            <Col md="6">
              <h5 className="text-light">Subscribite</h5>
              <Form>
                <InputGroup className="mb-3">
                  <Form.Control placeholder="usuario@example.com" id="email" />
                  <Button variant="danger" type="submit">
                    <i class="bi bi-send"></i>
                  </Button>
                </InputGroup>
              </Form>
            </Col>
            <Col md="6">
              <h5 className="text-light">Nuestras Redes Sociales</h5>
              <div className="text-center fs-3">
                <a href="" className="redesIcon">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="" className="redesIcon mx-2">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="" className="redesIcon">
                  <i class="bi bi-twitter-x"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <p className="lead m-0 text-light">
          &copy; Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
