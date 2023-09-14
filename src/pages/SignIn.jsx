import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { signIn } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const request = { ...formData };
    dispatch(signIn(request)).then(({ payload }) => {
      if (payload?.message) {
        console.log("Manejar los errores");
      }
      if (payload?.user) {
        navigate("/");
      }
    });
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    const aux = { ...formData };
    aux[name] = value;
    setFormData(aux);
  };
  return (
    <Form
      className="col-10 col-md-6 col-xl-4 bg-dark py-5 px-2 text-dark flex flex-col items-center text-white"
      onSubmit={handleSubmit}
      onInput={handleInput}
    >
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
      <div className="flex col-10 gap-1">
        <button className="text-center w-6/12 self-center hover:bg-zinc-700 text-white border-2 border-zinc-700 rounded-[.5rem] font-bold underline px-4 py-2">
          Sign in
        </button>
        <button className="text-center w-6/12 self-center hover:bg-zinc-700 text-white border-2 border-zinc-700 rounded-[.5rem] font-bold underline px-4 py-2">
          Google
        </button>
      </div>
      <Link
        className="mt-4 text-center w-10/12 self-center hover:bg-zinc-700 text-white border-2 border-zinc-700 rounded-[.5rem] font-bold underline px-4 py-2"
        to="/signup"
      >
        If you don't have an account, please sign up.
      </Link>
    </Form>
  );
}

export default SignIn;
