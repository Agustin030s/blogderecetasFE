import { Row, Col, Image, Button } from "react-bootstrap";

const Introduccion = () => {
  return (
    <section className="mb-3">
      <h2>¡Bienvenidos!</h2>
      <Row className="align-items-center">
        <Col md="6" className="mb-2 mb-md-0">
          <div id="carrouselRecetas" className="carousel slide">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <Image
                  src="https://www.clarin.com/2022/03/07/nt5D4YWDb_2000x1500__1.jpg"
                  className="d-block w-100 imgCarouselRecetas"
                ></Image>
              </div>
              <div className="carousel-item">
                <Image
                  src="https://cdn.buenavibra.es/wp-content/uploads/2019/10/27102938/bigstock-Food-To-The-Plow-Disk-Typical-299678002-e1572183019266.jpg"
                  className="d-block w-100 imgCarouselRecetas"
                ></Image>
              </div>
              <div className="carousel-item">
                <Image
                  src="https://img.freepik.com/fotos-premium/vista-superior-cocinar-pescado-dorado-parrilla-verduras-pescado-parrilla-bbq-buena-comida-ai-generativa_136403-19730.jpg"
                  className="d-block w-100 imgCarouselRecetas"
                ></Image>
              </div>
              <div className="carousel-item">
                <Image
                  src="https://img.freepik.com/fotos-premium/muslos-pollo-parrilla-parrilla-llamas_126277-1207.jpg?size=626&ext=jpg&ga=GA1.1.1319243779.1710633600&semt=ais"
                  className="d-block w-100 imgCarouselRecetas"
                ></Image>
              </div>
            </div>
            <Button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carrouselRecetas"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </Button>
            <Button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carrouselRecetas"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </Button>
          </div>
        </Col>
        <Col md="6">
          <h5 className="text-justify">
            Explora el apasionante mundo de la cocina argentina a las brasas con
            nosotros. Desde asados hasta pescados a la parrilla, en Brasas y
            Sazón te llevamos en un viaje culinario lleno de sabores y técnicas
            tradicionales. ¡Prepárate para encender el fuego y disfrutar de una
            experiencia gastronómica única en Brasas y Sazón!
          </h5>
        </Col>
      </Row>
    </section>
  );
};

export default Introduccion;
