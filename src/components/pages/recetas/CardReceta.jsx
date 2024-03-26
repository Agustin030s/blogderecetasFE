import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = ({ receta }) => {
  return (
    <Col md="4" lg="3" className="mb-3">
      <Card>
        <Card.Img variant="top" src={receta.imagen}></Card.Img>
        <Card.Body>
          <h5 className="text-center">{receta.nombreReceta}</h5>
        </Card.Body>
        <Link className="btn btnCardReceta" to={"/detallereceta/" + receta._id}>
          ¡A cocinar!
        </Link>
      </Card>
    </Col>
  );
};

export default CardReceta;
