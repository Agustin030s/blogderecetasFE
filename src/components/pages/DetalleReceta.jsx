import { obtenerRecetaAPI } from "../../helpers/queriesRecetas";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecetaCompleta from "./recetas/RecetaCompleta"
import { Spinner } from "react-bootstrap";

const DetalleReceta = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    buscarReceta();
  }, []);

  const buscarReceta = async () => {
    const respuesta = await obtenerRecetaAPI(id);
    if (respuesta.status === 200) {
      const recetaBuscada = await respuesta.json();
      setReceta(recetaBuscada);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: `Intenta está operación en unos minutos`,
        icon: "error",
      });
    }
  };

  const mostrarComponente = receta ? (
    <RecetaCompleta receta={receta}></RecetaCompleta>
  ) : (
    <Spinner animation="grow" variant="warning"></Spinner>
  );

  return (
    <section className="mainContainer">
    {mostrarComponente}
    </section>
  );
};

export default DetalleReceta;
