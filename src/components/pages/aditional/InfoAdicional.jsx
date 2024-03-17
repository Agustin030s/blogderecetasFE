import { Accordion } from "react-bootstrap";

const InfoAdicional = () => {
  return (
    <section className="my-4">
      <h2>Información Adicional</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="acordionHeader">
            ¿Cuánto tiempo se tarda en hacer brasas con la leña?
          </Accordion.Header>
          <Accordion.Body>
            El tiempo necesario para hacer brasas con leña puede variar según
            diversos factores, como el tipo de madera, el tamaño de las piezas
            de leña y las condiciones climáticas. En general, se recomienda
            comenzar el proceso al menos 30-45 minutos antes de que desees
            comenzar a cocinar sobre las brasas. Esto permite que la leña se
            queme y se convierta en brasas adecuadas para cocinar.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="1">
          <Accordion.Header className="acordionHeader">
            ¿Cuál es la mejor leña para hacer brasas?
          </Accordion.Header>
          <Accordion.Body>
            La mejor leña para hacer brasas es aquella que produce un calor
            uniforme y constante, así como un buen aroma para realzar el sabor
            de los alimentos. En Argentina, se utilizan comúnmente maderas como
            el quebracho, el algarrobo, el eucalipto y el nogal criollo. Estas
            maderas son densas y proporcionan una combustión lenta, lo que
            resulta en brasas duraderas y consistentes.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="2">
        <Accordion.Item eventKey="2">
          <Accordion.Header className="acordionHeader">
            ¿Cómo mantener las brasas encendidas?
          </Accordion.Header>
          <Accordion.Body>
            Para mantener las brasas encendidas durante el proceso de cocción,
            es importante seguir algunos pasos clave. Primero, asegúrate de
            distribuir uniformemente la leña dentro del fuego para promover una
            combustión pareja. Luego, evita agregar demasiada leña de una sola
            vez, ya que esto puede sofocar las brasas existentes. En su lugar,
            añade leña gradualmente según sea necesario para mantener el calor.
            Además, puedes avivar las brasas soplando suavemente sobre ellas o
            usando un fuelle si es necesario. Por último, asegúrate de proteger
            las brasas del viento y de mantenerlas cubiertas con un poco de
            ceniza para mantener el calor y evitar que se apaguen
            prematuramente.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default InfoAdicional;
