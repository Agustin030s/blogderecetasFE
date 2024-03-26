import { useEffect, useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { obtenerPrimerasRecetasAPI } from "../../../helpers/queriesRecetas";
import Swal from "sweetalert2";

const RecetasDestacadas = () => {
  const [recetasDestacadas, setRecetasDestacadas] = useState([]);

  useEffect(() => {
    obtenerRecetas();
  }, []);

  const obtenerRecetas = async () => {
    const respuesta = await obtenerPrimerasRecetasAPI();
    if (respuesta.status === 200) {
      const data = await respuesta.json();
      setRecetasDestacadas(data);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: `Intenta está operación en unos minutos`,
        icon: "error",
      });
    }
  };

  return (
    <section className="mb-4">
      <div className="d-flex align-items-center mb-3 flex-wrap justify-content-center justify-content-md-start">
        <h2 className="me-3">Recetas destacadas</h2>
        <Link to="/recetas">Ver todas las recetas</Link>
      </div>
      <Carousel fade>
        {recetasDestacadas.map((receta) => (
          <Carousel.Item>
            <Image
              src={receta.imagen}
              fluid
              className="imgRecetasDestacadas"
            ></Image>
            <Carousel.Caption>
              <h3>{receta.nombreReceta}</h3>
              <p>{receta.descripcionBreve}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default RecetasDestacadas;
