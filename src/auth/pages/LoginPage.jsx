import { useEffect } from "react";
import "../assets/auth.css";
import { Link } from "react-router-dom";
import { useAuthStore, useForm } from "../../hooks";
import Swal from "sweetalert2";

const loginForm = {
  loginEmail: "",
  loginPassword: "",
};
export const LoginPage = () => {
  // llamamos de las properties y de los methods que estamos generando desde nuestro custom hook
  const { startLogin, errorMessage } = useAuthStore();

  const {
    loginPassword,
    loginEmail,
    onInputChange: onLoginInputChange,
  } = useForm(loginForm);

  // creamos la funcion para obtener los datos

  const onSubmitLogin = (event) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire({
        icon: "error",
        title: "Error Inicio de Sesion...",
        text: errorMessage,
      });
    }
  }, [errorMessage]);

  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo">
          <p>
            TODOAPP <span>.</span>
          </p>
        </div>
        <div className="nav-menu" id="navMenu">
          <ul>
            <li>
              <Link className="link active">Inicio de Sesion</Link>
            </li>
            <li>
              <Link className="link" to={"/auth/register"}>
                Registrarme
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <form onSubmit={onSubmitLogin} className="form-box">
        <div className="login-container" id="login">
          <div className="top">
            <header>Inicio de Sesion</header>
            <span>Bienvenido a TodoApp</span>
            <span>Por favor ingresa tus credenciales</span>
          </div>
          <div className="input-box">
            <input
              type="email"
              name="loginEmail"
              value={loginEmail}
              onChange={onLoginInputChange}
              autoFocus
              maxLength={50}
              minLength={5}
              className="input-field"
              required={true}
              placeholder="Ingresa tu correo electronico"
            />
            <input
              type="password"
              name="loginPassword"
              value={loginPassword}
              onChange={onLoginInputChange}
              maxLength={30}
              minLength={6}
              className="input-field"
              required={true}
              placeholder="Ingresa tu contraseña"
            />

            <div className="input-box">
              <input type="submit" className="submit" value="Iniciar Sesion" />
            </div>
            <div className="two links-sm text-center">
              <label htmlFor="">
                <Link to={`/auth/register`}>¿Quieres registrarte?</Link>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
