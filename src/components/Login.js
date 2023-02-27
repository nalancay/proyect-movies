import PropTypes from "prop-types";
import { FormattedMessage, FormattedDate } from "react-intl";
import sweetAlert from "@sweetalert/with-react";
import { Navigate, useNavigate } from "react-router-dom";
import ApiAccount from "../api/account";

async function validateForm(email, password, navigate, setToken) {
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

  if (email !== "test@gmail.com" || password !== "react123") {
    sweetAlert("Credenciales invalidas");
    return;
  }

  const { token } = await ApiAccount.getTokenUser(email, password);
  if (token !== null) {
    sessionStorage.setItem("token", token);
    const tokenSessionStorage = sessionStorage.getItem("token");
    setToken(tokenSessionStorage);
    navigate("/list");
  }
}

function Login({ setToken }) {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const emailValue = email.value;
    const passwordValue = password.value;

    validateForm(emailValue, passwordValue, navigate, setToken);
  };

  return (
    <>
      {token && <Navigate to="/list" />}
      <div className="row d-block align-items-center">
        <span>
          <FormattedMessage id="login.body.home" />
        </span>
        <br />
        <span>
          <FormattedDate
            value={Date.now()}
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"
          />
        </span>
        <div className="col-6 offset-3">
          <form onSubmit={submitHandler}>
            <label className="form-label d-block mt-2">
              <span>
                <FormattedMessage id="login.email" />
              </span>
              <input className="form-control" type="email" name="email" />
            </label>
            <label className="form-label d-block mt-2">
              <span>
                <FormattedMessage id="login.password" />
              </span>
              <input className="form-control" type="password" name="password" />
            </label>
            <button className="btn btn-success mt-2" type="submit">
              <FormattedMessage id="login.body.btn" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

Login.propTypes = {
  setToken: PropTypes.func,
};

export default Login;
