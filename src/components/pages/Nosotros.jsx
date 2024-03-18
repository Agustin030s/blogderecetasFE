import { Container } from "react-bootstrap";
import BannerPrincipal from "./aditional/BannerPrincipal";

const Nosotros = () => {
  return (
    <>
      <BannerPrincipal texto="¡Bienvenidos a Brasas y Sazón!"></BannerPrincipal>
      <Container className="my-4">
        <h2>Sobre Nosotros</h2>
        <p>
          En este rincón virtual, te sumergirás en el apasionante mundo de la
          cocina argentina a las brasas. Desde los aromáticos asados hasta las
          exquisitas comidas al disco y los sabores frescos del pescado a la
          parrilla, Brasas y Sazón es tu destino culinario definitivo para
          explorar y deleitarte con las delicias que ofrece la cocina argentina
          cocinada sobre brasas.
        </p>
        <p>
          Nos enorgullece presentarte una amplia variedad de recetas
          tradicionales y creativas, cada una diseñada para resaltar los sabores
          únicos que solo se pueden lograr a través del fuego lento y la
          atención meticulosa que caracteriza a la cocina a las brasas. Desde
          los cortes de carne más tiernos hasta las verduras más frescas y los
          frutos de mar más suculentos, nuestras recetas te llevarán en un viaje
          gastronómico que despertará tus sentidos y satisfará tu paladar.
        </p>
        <p>
          En Brasas y Sazón, no solo compartimos recetas, sino también técnicas,
          consejos y trucos para dominar el arte de cocinar a las brasas como un
          verdadero experto. Desde cómo encender y mantener las brasas hasta la
          selección de la mejor leña y la preparación adecuada de los
          ingredientes, te brindamos toda la información que necesitas para
          convertirte en un maestro de la parrilla.
        </p>
        <p>
          Ya sea que seas un aficionado a la parrilla experimentado o un
          principiante entusiasta, Brasas y Sazón tiene algo para ti. Únete a
          nosotros en esta emocionante aventura culinaria mientras exploramos
          juntos los sabores, aromas y técnicas que hacen que la cocina
          argentina a las brasas sea verdaderamente inolvidable.
        </p>
        <h2 className="text-center py-3 border border-danger border-end-0 border-start-0">
          ¡Prepárate para encender el fuego, sazonar tus ingredientes y
          disfrutar de una experiencia gastronómica que nunca olvidarás en
          Brasas y Sazón!
        </h2>
      </Container>
    </>
  );
};

export default Nosotros;
