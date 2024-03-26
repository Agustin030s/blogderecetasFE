import { useEffect, useState } from "react";
import { Table, Row, Col, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemReceta from "./recetas/ItemReceta";
import ItemUsuario from "./usuarios/ItemUsuario";
import { listarRecetasAPI } from "../../helpers/queriesRecetas";
import { listarUsuariosAPI } from "../../helpers/queriesUsuarios";

const Administrador = () => {
  const [tabla, setTabla] = useState("Recetas");
  const [recetas, setRecetas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const handleOnChange = (event) => {
    setTabla(event.target.value);
  };

  useEffect(() => {
    obtenerRecetas();
    obtenerUsuarios();
  }, []);

  const obtenerRecetas = async () => {
    const respuesta = await listarRecetasAPI();
    if (respuesta.status === 200) {
      const data = await respuesta.json();
      setRecetas(data);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: `Intenta está operación en unos minutos`,
        icon: "error",
      });
    }
  };

  const obtenerUsuarios = async () => {
    const respuesta = await listarUsuariosAPI();
    if (respuesta.status === 200) {
      const data = await respuesta.json();
      setUsuarios(data);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: `Intenta está operación en unos minutos`,
        icon: "error",
      });
    }
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
            <Link className="btn btn-primary" to="/administrador/crearusuario">
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
            {recetas.map((receta) => (
              <ItemReceta key={receta._id} receta={receta} setRecetas={setRecetas}></ItemReceta>
            ))}
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
            <th>Opciones</th>
          </thead>
          <tbody>
            {usuarios.map((user) => (
              <ItemUsuario key={user._id} usuario={user} setUsuarios={setUsuarios}></ItemUsuario>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Administrador;
