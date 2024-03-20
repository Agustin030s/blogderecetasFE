import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = () => {
  return (
    <Col md="4" lg="3" className="mb-3">
      <Card>
        <Card.Img variant="top" src="https://i.ytimg.com/vi/I7wh6CBAhcw/maxresdefault.jpg"></Card.Img>
        <Card.Body>
            <h5 className="text-center">Costillar a la llama</h5>
        </Card.Body>
        <Link className="btn btnCardReceta">¡A cocinar!</Link>
      </Card>
    </Col>
  );
};

export default CardReceta;
