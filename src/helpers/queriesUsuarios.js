import Swal from "sweetalert2";

const URI_USUARIOS = import.meta.env.VITE_API_USUARIOS;

export const listarUsuariosAPI = async () => {
  try {
    const respuesta = await fetch(URI_USUARIOS);
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const obtenerUsuarioAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_USUARIOS}/${id}`);
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "API no disponible",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const crearUsuarioAPI = async (usuarioNuevo) => {
  try {
    const respuesta = await fetch(URI_USUARIOS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioNuevo),
    });
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "API no disponible",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const editarUsuarioAPI = async (usuario, id) => {
  try {
    const respuesta = await fetch(`${URI_USUARIOS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "API no disponible",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const eliminarUsuarioAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_USUARIOS}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "API no disponible",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};
