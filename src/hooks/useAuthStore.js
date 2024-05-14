import { useDispatch, useSelector } from "react-redux";
import { todoAppApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {
  // llamamos el slice de la autenticacion de nuestros usuarios mediante un hook
  const { status, errorMessage, user } = useSelector((state) => state.auth);
  // llamar el metodo para hacer el despache de las acciones
  const dispatch = useDispatch();

  // creamos una funcion para iniciar sesion
  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await todoAppApi.post("/auth", { email, password });
      localStorage.setItem("token", data.token);
      // almacenar la hora en que se registro el token en el localstorage
      localStorage.setItem("token-item-data", new Date().getTime());
      dispatch(
        onLogin({ names: data.names, uid: data.uid, token: data.token })
      );
    } catch (error) {
      dispatch(onLogout("Las credenciales son incorrectas."));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);
    }
  };

  // creamos una funcion para realizar el registro del usuario
  const startRegister = async ({
    names,
    surnames,
    email,
    number,
    password,
  }) => {
    dispatch(onChecking());

    console.log({ names, surnames, email, number, password });

    try {
      const { data } = await todoAppApi.post("/auth/register", {
        names,
        surnames,
        email,
        number,
        password,
      });
      localStorage.setItem("token", data.token);
      // almacenar la hora en que se registro el token en el localstorage
      localStorage.setItem("token-item-data", new Date().getTime());
      dispatch(
        onLogin({ names: data.names, uid: data.uid, token: data.token })
      );
      // vamos a redireccionar al usuario
      window.location.href = "/";
    } catch (error) {
      console.log({ error });
      dispatch(
        onLogout(
          error.response?.data?.message ||
            "Error al momento de registro los datos del usuario"
        )
      );
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 50);
    }
  };

  // crear una funcion para renovar el token
  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(onLogout());
    }

    try {
      const { data } = await todoAppApi.get("/auth/renew");
      console.log("Ingreso en la consulta");
      localStorage.setItem("token", data.token);
      // almacenar la hora en que se registro el token en el localstorage
      localStorage.setItem("token-item-data", new Date().getTime());
      dispatch(
        onLogin({ names: data.names, uid: data.uid, token: data.token })
      );
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);
    }
  };

  // crear una funcion para realizar el cierre de sesion
  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    //*properties
    status,
    errorMessage,
    user,
    //*methods
    startLogin,
    startRegister,
    startLogout,
    checkAuthToken,
  };
};
