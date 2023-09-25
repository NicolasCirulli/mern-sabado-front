import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { signUp } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import toastAlerts from "../utils/alerts";
function SignUp() {
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
    country: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    axios("https://restcountries.com/v3.1/all?fields=name").then(({ data }) =>
      setCountries(
        data
          .map((country) => country.name.common)
          .sort((a, b) => a.localeCompare(b))
      )
    );
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const request = { ...formData };
    for (const key in request) {
      if (!request[key]) {
        delete request[key];
      }
    }
    dispatch(signUp(request)).then(({ payload }) => {
      if (payload?.errors) {
        console.log("Manejar los errores");
      }
      if (payload?.user) {
        console.log(" Navigate home");
      }
    });
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    const aux = { ...formData };
    aux[name] = value;
    setFormData(aux);
  };

  const signUpWithGoogle = (e) => {
    const userGoogle = jwtDecode(e.credential);
    const body = {
      name: userGoogle.name,
      email: userGoogle.email,
      image: userGoogle.picture,
      password: userGoogle.given_name + userGoogle.sub,
    };
    dispatch(signUp(body)).then((res) => {
      if (res.payload.user) {
        toastAlerts.success(res.payload.user.name);
        navigate("/");
      } else if (res.payload.message) {
        toastAlerts.error(res.payload.message);
      }
    });
  };

  return (
    <Form
      className="col-10 col-md-6 col-xl-4 bg-dark py-5 px-2 text-dark flex flex-col items-center text-white"
      onSubmit={handleSubmit}
      onInput={handleInput}
    >
      <Form.Group className="mb-3 col-10 ">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Nicolas" name="name" />
      </Form.Group>
      <Form.Group className="mb-3 col-10">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="example@gmail.com"
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-3 col-10">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" name="password" />
      </Form.Group>
      <Form.Group className="mb-3 col-10">
        <Form.Label>Photo</Form.Label>
        <Form.Control type="text" placeholder="Link image" name="image" />
      </Form.Group>
      <Form.Select
        size="md"
        className="mb-3"
        style={{ width: "83.333%" }}
        name="country"
      >
        {countries?.map((country) => (
          <option key={country + " option"} value={country}>
            {country}
          </option>
        ))}
      </Form.Select>

      <div className="flex col-10 gap-3 flex-wrap justify-center">
        <button className="text-center w-6/12 self-center hover:bg-zinc-700 text-white border-2 border-zinc-700 rounded-[.5rem] font-bold underline px-4 py-2">
          Sign up
        </button>
        <GoogleLogin
          text="signup_with"
          theme="filled_black"
          onSuccess={signUpWithGoogle}
        />
      </div>
      <Link
        className="mt-4 text-center w-10/12 self-center hover:bg-zinc-700 text-white border-2 border-zinc-700 rounded-[.5rem] font-bold underline px-4 py-2"
        to="/signin"
      >
        If you already have an account, please sign in.
      </Link>
    </Form>
  );
}

export default SignUp;
