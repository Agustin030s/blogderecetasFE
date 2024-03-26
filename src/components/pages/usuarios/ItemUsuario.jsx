import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  eliminarUsuarioAPI,
  listarUsuariosAPI,
} from "../../../helpers/queriesUsuarios";

const ItemUsuario = ({ usuario, setUsuarios }) => {
  const eliminarUsuario = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar este usuario?",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await eliminarUsuarioAPI(usuario._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Usuario eliminado!",
            text: `El usuario "${usuario.email}" fue eliminado correctamente`,
            icon: "success",
          });
          const respuestaUsuarios = await listarUsuariosAPI();
          if (respuestaUsuarios.status === 200) {
            const usuariosRestantes = await respuestaUsuarios.json();
            setUsuarios(usuariosRestantes);
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
            text: `El usuario ${usuario.email} no pudo ser eliminado, intente esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr className="text-center">
      <td>{usuario.nombreCompleto}</td>
      <td className="filaEmail text-truncate">{usuario.email}</td>
      <td>{usuario.usuario}</td>
      <td>{usuario.rol}</td>
      <td className="text-center">
        <Link
          className="btn btn-warning me-2 mb-2"
          to={"/administrador/editar" + usuario._id}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button
          variant="danger"
          className="me-2 mb-2"
          onClick={eliminarUsuario}
        >
          <i className="bi bi-person-fill-x"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuario;
