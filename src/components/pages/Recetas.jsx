import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CardReceta from "./recetas/CardReceta";
import BannerPrincipal from "./aditional/BannerPrincipal";
import { useState } from "react";

const Recetas = () => {
  const [filtro, setFiltro] = useState("verTodo");

  const handleOnChange = (event) => {
    setFiltro(event.target.value);
  };

  return (
    <>
      <BannerPrincipal texto="Nuestras Recetas"></BannerPrincipal>
      <Container className="my-4 mainContainer">
        <Row className="mb-3">
          <Col md="4" className="mb-3">
            <Form.Select onChange={handleOnChange}>
              <option value="verTodo">Ver Todo</option>
              <option value="filtPorNombre">Filtrar por nombre</option>
              <option value="filtPorCat">Filtrar por categoria</option>
            </Form.Select>
          </Col>
          <Col md="8" className="mb-3">
            {filtro === "filtPorNombre" && (
              <Form>
                <Form.Group className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre de la receta"
                    className="me-2"
                  ></Form.Control>
                  <Button type="submit"><i className="bi bi-search"></i></Button>
                </Form.Group>
              </Form>
            )}
            {filtro === "filtPorCat" && (
              <Row className="justify-content-around">
                <Col xs="6" sm="6" md="3" className="mb-2">
                  <button className="btn btnCategoria">Carnes</button>
                </Col>
                <Col xs="6" sm="6" md="3">
                  <button className="btn btnCategoria">Pollo</button>
                </Col>
                <Col xs="6" sm="6" md="3">
                  <button className="btn btnCategoria">Pescado</button>
                </Col>
                <Col xs="6" sm="6" md="3">
                  <button className="btn btnCategoria">Al Disco</button>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
        <Row className="justify-content-around align-items-center">
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
        </Row>
      </Container>
    </>
  );
};

export default Recetas;
