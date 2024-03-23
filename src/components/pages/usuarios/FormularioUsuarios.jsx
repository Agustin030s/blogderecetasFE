import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const FormularioUsuarios = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = (usuario) => {
    console.log(usuario);
  };

  return (
    <Container className="my-4">
      <h2 className="tituloFormulario mb-2 text-center">Agregar Usuario</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="nombreCompleto">
          <Form.Label>Nombre Completo*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej. Juan Perez"
            {...register("nombreCompleto", {
              required: "El nombre completo es obligatorio",
              minLength: {
                value: 3,
                message: "El nombre debe tener 3 caracteres como mínimo",
              },
              maxLength: {
                value: 60,
                message: "El nombre debe tener 60 caracteres como máximo",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.nombreCompleto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="usuario@usuario.com"
            {...register("email", {
              required: "El email es obligatorio",
              minLength: {
                value: 10,
                message: "El email debe tener 10 caracteres como mínimo",
              },
              maxLength: {
                value: 340,
                message: "El email debe tener 340 caracteres como máximo",
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "El email ingresado no es válido",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="usuario">
          <Form.Label>Usuario*</Form.Label>
          <Form.Control
            type="text"
            placeholder="userTwo"
            {...register("usuario", {
              required: "El nombre de usuario es obligatorio",
              minLength: {
                value: 5,
                message: "El usuario debe tener 5 caracteres como mínimo",
              },
              maxLength: {
                value: 20,
                message: "El usuario debe tener 20 caracteres como máximo",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.usuario?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="clave">
          <Form.Label>Clave*</Form.Label>
          <Form.Control
            type="password"
            placeholder="*********"
            {...register("clave", {
              required: "La clave es obligatoria",
              minLength: {
                value: 8,
                message: "La clave debe tener 8 caracteres como mínimo",
              },
              maxLength: {
                value: 16,
                message: "La clave debe tener 16 caracteres como máximo",
              },
              pattern: {
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                message:
                  "La clave debe tener al menos una mayuscula, miniscula y un número",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">{errors.clave?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="rol">
          <Form.Label>Rol*</Form.Label>
          <Form.Select
            {...register("rol", {
              required: "El rol es obligatorio",
            })}
          >
            <option value="">Seleccione un Rol</option>
            <option value="Administrador">Administrador</option>
            <option value="Usuario">Usuario</option>
          </Form.Select>
          <Form.Text className="text-danger">{errors.rol?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="usuario">
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

export default FormularioUsuarios;
