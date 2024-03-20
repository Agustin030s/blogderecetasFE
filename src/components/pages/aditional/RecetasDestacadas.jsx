import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecetasDestacadas = () => {
  return (
    <section className="mb-4">
      <div className="d-flex align-items-center mb-3 flex-wrap justify-content-center justify-content-md-start">
        <h2 className="me-3">Recetas destacadas</h2>
        <Link to="/recetas">Ver todas las recetas</Link>
      </div>
      <Carousel fade>
        <Carousel.Item>
          <Image
            src="https://i.ytimg.com/vi/I7wh6CBAhcw/maxresdefault.jpg"
            fluid
            className="imgRecetasDestacadas"
          ></Image>
          <Carousel.Caption>
            <h3>Costillar a las Llamas</h3>
            <p>Descripcion breve</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://www.estiloytendencia.com/u/fotografias/m/2023/10/1/f425x230-51169_65151_5679.jpg"
            fluid
            className="imgRecetasDestacadas"
          ></Image>
          <Carousel.Caption>
            <h3>Hamburguesas Caseras a la Parrilla</h3>
            <p>Descripcion breve</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://calisa.com.ar/wp-content/uploads/2022/02/pollo-al-disco-youtube-2.jpg"
            fluid
            className="imgRecetasDestacadas"
          ></Image>
          <Carousel.Caption>
            <h3>Pollo al Disco con Arroz</h3>
            <p>Descripcion breve</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default RecetasDestacadas;
