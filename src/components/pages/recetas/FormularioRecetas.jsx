import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const FormularioRecetas = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = (receta) =>{
    console.log(receta);
  }

  return (
    <Container className="my-4 mainContainer">
      <h2 className="tituloFormulario mb-2 text-center">Agregar Receta</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="nombreReceta">
          <Form.Label>Nombre de la Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Costillar a la llama"
            {...register("nombreReceta", {
              required: "El nombre de la receta es obligatorio",
              minLength: {
                value: 5,
                message: "El nombre debe tener 5 caracteres como mínimo",
              },
              maxLength: {
                value: 400,
                message:
                  "El nombre de la receta debe tener 400 caracteres como máximo",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreReceta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una categoria</option>
            <option value="Carnes">Carnes</option>
            <option value="Pollo">Pollo</option>
            <option value="Pescado">Pescado</option>
            <option value="Al_Disco">Al Disco</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionBreve">
          <Form.Label>Descripcion Breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej. Nunca puede faltar una buena carne asada"
            {...register("descripcionBreve", {
              required: "La descripcion breve es obligatoria",
              minLength: {
                value: 10,
                message: "La descripción debe tener como mínimo 10 caracteres",
              },
              maxLength: {
                value: 200,
                message: "La descripción debe tener como máximo 200 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionBreve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagen">
          <Form.Label>Imagen*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej. url de la imagen"
            {...register("imagen", {
              required: "La imagen es obligatoria",
              pattern: {
                value: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
                message:
                  "Debe ingresar una URL de imagen valida (png, jpg, jpeg, gif, png, svg)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="ingredientes">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingrese los ingredientes separados por coma"
            {...register("ingredientes", {
              required: "Los ingredientes son obligatorios",
              minLength: {
                value: 5,
                message: "Debe ingresar como mínimo 5 caracteres",
              },
              maxLength: {
                value: 450,
                message: "Debe ingresar como máximo 450 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.ingredientes?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="preparacion">
          <Form.Label>Preparación*</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            placeholder="Primero preparar el fuego, etc."
            {...register("preparacion", {
              required: "La preparacion de la receta es obligatoria",
              minLength: {
                value: 25,
                message: "Debe ingresar como mínimo 25 caracteres",
              },
              maxLength: {
                value: 2000,
                message: "Debe ingresar como máximo 2 mil caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.preparacion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="tiempoDePreparacion">
          <Form.Label>Tiempo de Preparación*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el tiempo en minutos, solo numeros"
            {...register("tiempoDePreparacion", {
              required: "El tiempo de preparacion es obligatorio",
              min: {
                value: 5,
                message: "El tiempo minimo es 5 minutos",
              },
              max: {
                value: 300,
                message: "El tiempo máximo es 300 minutos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.tiempoDePreparacion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="autor">
          <Form.Label>Autor*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej. Donatto"
            {...register("autor", {
              required: "El nombre del autor es obligatorio",
              minLength: {
                value: 3,
                message: "Debe ingresar como mínimo 3 caracteres",
              },
              maxLength: {
                value: 60,
                message: "Debe ingresar como máximo 60 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.autor?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Button type="submit" variant="danger" className="me-2">
            Agregar
          </Button>
          <Link className="btn btn-primary" to="/administrador">
            Volver
          </Link>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default FormularioRecetas;
