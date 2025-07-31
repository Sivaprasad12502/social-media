import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useState } from "react";

const Login = () => {
  const [inputs, seInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);
  const navigate=useNavigate()
  const handleChange = (e) => {
    seInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(inputs);
      navigate("/")
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            provident, aperiam dolorem impedit et omnis, error minus dignissimos
            inventore quidem ratione atque molestias numquam eligendi cupiditate
            non, sint vero aspernatur?
          </p>
          <span>Dont' you have an account?</span>
          <Link to="/register">
            {" "}
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err&&err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
