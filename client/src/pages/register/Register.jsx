import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from 'axios'

function Register() {
  const [inputs,seInputs]=useState({
    username:"",
    email:"",
    password:"",
    name:"",
  })
  const [err,setError]=useState(null)
  const handleChange=e=>{
    seInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleClick= async e=>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:800/api/auth/register",inputs)
      
    } catch (error) {
      setError(error.response.data)
      
    }
  }
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            provident, aperiam dolorem impedit et omnis, error minus dignissimos
            inventore quidem ratione atque molestias numquam eligendi cupiditate
            non, sint vero aspernatur?
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
            <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
            <input type="text" placeholder="Name"  name="name" onChange={handleChange}/>
            <button onClick={handleClick}>Register</button>
            {err&&err}
          </form >
        </div>
      </div>
    </div>
  );
}

export default Register;
