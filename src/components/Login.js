import sweetAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";
import Account from "../api/account";

async function validateForm(email, password, navigate) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (email === "" || password === "") {
    sweetAlert(<h2>Los campos no pueden estar vacios</h2>);
    return;
  }

  if (email !== "" && !regexEmail.test(email)) {
    sweetAlert(<h2>Debes ingresar email valido</h2>);
    return;
  }

  if (email !== "nalancay@gmail.com" || password !== "test") {
    sweetAlert("Credenciales invalidas");
    return;
  }

  const { token } = await Account.postUserInfo(email, password);
  if (token !== null) {
    localStorage.setItem("token", token);
    navigate("/list");
  }
}

function Login() {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const emailValue = email.value;
    const passwordValue = password.value;

    validateForm(emailValue, passwordValue, navigate);
  };

  return (
    <>
      <h2>Formulario de Login</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Email</span>
          <input type="email" name="email" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" />
        </label>
        <button type="submit"> Ingresar</button>
      </form>
    </>
  );
}

export default Login;
