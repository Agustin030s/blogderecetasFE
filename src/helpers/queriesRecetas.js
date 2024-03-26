import Swal from "sweetalert2";

const URI_RECETAS = import.meta.env.VITE_API_RECETAS;

export const listarRecetasAPI = async () => {
  try {
    const respuesta = await fetch(URI_RECETAS);
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const obtenerRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_RECETAS}/${id}`);
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "API no disponible",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const obtenerPrimerasRecetasAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_RECETAS}/primeras`);
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "API no disponible",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const crearRecetaAPI = async (recetaNueva) => {
  try {
    const respuesta = await fetch(URI_RECETAS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaNueva),
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

export const editarRecetaAPI = async (receta, id) => {
  try {
    const respuesta = await fetch(`${URI_RECETAS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receta),
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

export const eliminarRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_RECETAS}/${id}`, {
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
