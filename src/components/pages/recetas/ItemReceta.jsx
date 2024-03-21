import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemReceta = () => {
  return (
    <tr className="text-center">
      <td className="filaNombre text-truncate">Costillar a la Llama</td>
      <td className="filaDescripcion text-truncate">Un plato tradicional infaltable en cualquier mesa, podes cocinarlo a fuego lento o como mas desees</td>
      <td className="text-center">
        <Image
          src="https://i.ytimg.com/vi/I7wh6CBAhcw/maxresdefault.jpg"
          alt="hola"
          className="imgTabla"
          thumbnail
        ></Image>
      </td>
      <td>Carnes</td>
      <td>Agustin Maza</td>
      <td>10</td>
      <td className="text-center">
        <Link className="btn btn-info me-2 mb-2">
          <i class="bi bi-eye"></i>
        </Link>
        <Link className="btn btn-warning me-2 mb-2">
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" className="me-2 mb-2">
          <i className="bi bi-trash3"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
