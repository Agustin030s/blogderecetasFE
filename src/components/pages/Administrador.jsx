import { useState } from "react";
import { Table, Row, Col, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemReceta from "./recetas/ItemReceta";

const Administrador = () => {
  const [tabla, setTabla] = useState("Recetas");

  const handleOnChange = (event) => {
    setTabla(event.target.value);
  };

  return (
    <Container className="my-4 mainContainer">
      <h1 className="display-3">Administrador</h1>
      <hr />
      <Row className="align-items-center justify-content-sm-center">
        <Col md="4" className="mb-3">
          <Form.Select onChange={handleOnChange}>
            <option value="Recetas">Recetas</option>
            <option value="Usuarios">Usuarios</option>
          </Form.Select>
        </Col>
        <Col md="8" className="text-md-end text-center mb-3">
          {tabla === "Recetas" && (
            <Link className="btn btn-primary me-2" to="/administrador/crear">
              <i className="bi bi-file-earmark-plus"></i>
            </Link>
          )}
          {tabla === "Usuarios" && (
            <Link className="btn btn-primary" to="/administrador/crear">
              <i className="bi bi-person-add"></i>
            </Link>
          )}
        </Col>
      </Row>
      {tabla === "Recetas" && (
        <Table responsive striped hover bordered className="my-4">
          <thead className="text-center">
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Categoria</th>
            <th>Autor</th>
            <th>Puntuacion</th>
            <th>Opciones</th>
          </thead>
          <tbody>
            <ItemReceta></ItemReceta>
          </tbody>
        </Table>
      )}
      {tabla === "Usuarios" && (
        <Table responsive striped hover bordered className="my-4">
          <thead className="text-center">
            <th>Nombre Completo</th>
            <th>Email</th>
            <th>Usuario</th>
            <th>Rol</th>
          </thead>
          <tbody></tbody>
        </Table>
      )}
    </Container>
  );
};

export default Administrador;
