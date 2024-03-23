import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const FormularioRecetas = () => {
  return (
    <Container className="my-4">
     <h2 className="tituloFormulario mb-2 text-center">Agregar Receta</h2>
      <Form>
        <Form.Group className="mb-3" controlId="nombreReceta">
          <Form.Label>Nombre de la Receta*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Costillar a la llama" />
          <Form.Text className="text-danger">Error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select>
            <option value="">Seleccione una categoria</option>
            <option value="Carnes">Carnes</option>
            <option value="Pollo">Pollo</option>
            <option value="Pescado">Pescado</option>
            <option value="Al_Disco">Al Disco</option>
          </Form.Select>
          <Form.Text className="text-danger">Error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionBreve">
          <Form.Label>Descripcion Breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej. Nunca puede faltar una buena carne asada"
          />
          <Form.Text className="text-danger">Error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagen">
          <Form.Label>Imagen*</Form.Label>
          <Form.Control type="text" placeholder="Ej. url de la imagen" />
          <Form.Text className="text-danger">Error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="ingredientes">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingrese los ingredientes separados por coma"
          />
          <Form.Text className="text-danger">Error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="preparacion">
          <Form.Label>Preparación*</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            placeholder="Primero preparar el fuego, etc."
          />
          <Form.Text className="text-danger">Error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="tiempoDePreparacion">
          <Form.Label>Tiempo de Preparación*</Form.Label>
          <Form.Control type="text" placeholder="Ej. 2 hs." />
          <Form.Text className="text-danger">Error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="autor">
          <Form.Label>Autor*</Form.Label>
          <Form.Control type="text" placeholder="Ej. Donatto" />
          <Form.Text className="text-danger">Error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
            <Button type="submit" variant="danger" className="me-2">Agregar</Button>
            <Link className="btn btn-primary" to="/administrador">Volver</Link>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default FormularioRecetas;
