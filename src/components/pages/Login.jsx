import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
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
    <Container className="my-5 mainContainer">
      <h2 className="tituloFormulario mb-3">Iniciar Sesión</h2>
      <Row>
        <Col md="6">
          <Form onSubmit={handleSubmit(onSubmit)}>
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
              <Form.Text className="text-danger">
                {errors.email?.message}
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
              <Form.Text className="text-danger">
                {errors.clave?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="usuario">
              <Button type="submit" variant="danger" className="me-2">
                Ingresar <i class="bi bi-arrow-bar-right"></i>
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col md="6">
          <h4 className="text-center mb-3">Inicia sesión con otros medios</h4>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Link to="/error404" className="btn btnGoogle mb-2">
            <i class="bi bi-google"></i> Continuar con Google
            </Link>
            <Link to="/error404" className="btn btnFacebook mb-2">
            <i class="bi bi-facebook"></i> Continuar con Facebook
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
