import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  eliminarRecetaAPI,
  listarRecetasAPI,
} from "../../../helpers/queriesRecetas";
import Swal from "sweetalert2";

const ItemReceta = ({ receta, setRecetas }) => {
  const eliminarReceta = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar esta receta?",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await eliminarRecetaAPI(receta._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Receta eliminada!",
            text: `La receta "${receta.nombreReceta}" fue eliminada correctamente`,
            icon: "success",
          });
          const respuestaRecetas = await listarRecetasAPI();
          if (respuestaRecetas.status === 200) {
            const recetasRestantes = await respuestaRecetas.json();
            setRecetas(recetasRestantes);
          } else {
            Swal.fire({
              title: "Ocurrio un error",
              text: `Intenta está operación en unos minutos`,
              icon: "error",
            });
          }
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `La receta ${receta.nombreReceta} no pudo ser eliminada, intente esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <tr className="text-center">
      <td className="filaNombre text-truncate">{receta.nombreReceta}</td>
      <td className="filaDescripcion text-truncate">
        {receta.descripcionBreve}
      </td>
      <td className="text-center">
        <Image
          src={receta.imagen}
          alt="hola"
          className="imgTabla"
          thumbnail
        ></Image>
      </td>
      <td>{receta.categoria}</td>
      <td>{receta.autor}</td>
      <td>10</td>
      <td className="text-center">
        <Link
          className="btn btn-info me-2 mb-2"
          to={"/detalleReceta/" + receta._id}
        >
          <i class="bi bi-eye"></i>
        </Link>
        <Link
          className="btn btn-warning me-2 mb-2"
          to={"/administrador/editar/" + receta._id}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" className="me-2 mb-2" onClick={eliminarReceta}>
          <i className="bi bi-trash3"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
