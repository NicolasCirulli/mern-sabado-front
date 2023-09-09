import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/actions/userActions.js";
const SignUp = () => {
  const [countries, setCountries] = useState([]);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const image = useRef(null);
  const country = useRef(null);

  useEffect(() => {
    axios("https://restcountries.com/v3.1/all?fields=name").then(({ data }) =>
      setCountries(data.map((country) => country.name.common))
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = [name, email, password, image, country];
    if (aux.some((campo) => !campo.current.value)) {
      alert("Todos los campos son obligatorios");
    } else {
      const body = {
        name: name.current.value,
        email: email.current.value,
        image: image.current.value,
        password: password.current.value,
        country: country.current.value,
      };
      dispatch(signUp(body));
    }
  };

  return (
    <div className="d-flex col-10 justify-center items-center">
      <form
        className="d-flex flex-column justify-center items-start gap-5 bg-gray-200 p-5"
        onSubmit={handleSubmit}
      >
        <label className="border">
          {" "}
          Name
          <input type="text" name="name" ref={name} required />
        </label>
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
        <label>
          {" "}
          Image
          <input type="text" name="image" ref={image} />
        </label>
        <label>
          {" "}
          country
          <select name="country" ref={country}>
            {countries.length > 0 &&
              countries.map((country) => (
                <option key={`opt-country-${country}`} value={country}>
                  {" "}
                  {country}{" "}
                </option>
              ))}
          </select>
        </label>
        <button className="btn btn-secondary"> Registrarse </button>
      </form>
    </div>
  );
};

export default SignUp;
