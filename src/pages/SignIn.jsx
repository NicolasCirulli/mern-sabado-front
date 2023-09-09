import React, { useRef } from "react";
import { signIn } from "../redux/actions/userActions.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = [email, password];
    if (aux.some((campo) => !campo.current.value)) {
      alert("Todos los campos son obligatorios");
    } else {
      const body = {
        email: email.current.value,
        password: password.current.value,
      };
      dispatch(signIn(body)).then((response) => {
        if (response.payload.success) {
          alert("Bienvenido " + response.payload.user.name);
          navigate("/");
        }
      });
    }
  };

  return (
    <div>
      <div className="d-flex col-10 justify-center items-center">
        <form
          className="d-flex flex-column justify-center items-start gap-5 bg-gray-200 p-5"
          onSubmit={handleSubmit}
        >
          <label>
            {" "}
            email
            <input type="email" name="email" ref={email} />
          </label>
          <label>
            {" "}
            password
            <input type="password" name="password" ref={password} />
          </label>

          <button className="btn btn-secondary"> Log in </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
