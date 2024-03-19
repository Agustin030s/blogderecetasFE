import { Container, Row, Col } from "react-bootstrap";

const Recetas = () => {
    return (
        <Container className="my-4 mainContainer">
            <h2 className="text-center">Nuestras Recetas</h2>
            <Row className="justify-content-around align-items-center">
                <Col md="4" lg="3">
                    <h5>Cards 1</h5>
                </Col>
                <Col md="4" lg="3">
                    <h5>Cards 1</h5>
                </Col>
                <Col md="4" lg="3">
                    <h5>Cards 1</h5>
                </Col>
                <Col md="4" lg="3">
                    <h5>Cards 1</h5>
                </Col>
            </Row>
        </Container>
    );
};

export default Recetas;