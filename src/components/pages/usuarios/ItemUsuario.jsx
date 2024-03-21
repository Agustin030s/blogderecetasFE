import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemUsuario = () => {
  return (
    <tr className="text-center">
      <td>Administrador</td>
      <td className="filaEmail text-truncate">
        admin@admin.com
      </td>
      <td>Administrador</td>
      <td>Administrador</td>
      <td className="text-center">
        <Link className="btn btn-warning me-2 mb-2">
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" className="me-2 mb-2">
        <i className="bi bi-person-fill-x"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuario;
