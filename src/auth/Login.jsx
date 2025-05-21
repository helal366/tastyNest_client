import React, { useContext } from "react";
import AuthContext from "../contexts-providers/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import GoogleSignInButton from "../components/GoogleSignInButton";
import { toast } from "react-toastify";

const Login = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const { userLogin } = useContext(AuthContext);
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    // console.log(formData, email, password);
    userLogin(email, password)
      .then((result) => {
        const userEmail=result?.user?.email
        toast.success(`${userEmail} logged in successfully.`);
        navigate(`${location.state?location.state:'/'}`)
      })
      .catch((err) => {
        toast.error(err.message)
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl ">
      <div className="card-body">
        <h2 className="text-3xl text-center font-semibold mb-4">
          Please Login Here!
        </h2>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn bg-black/30 hover:bg-black hover:text-white mt-2">
            Login
          </button>
          
        </form>
        <GoogleSignInButton></GoogleSignInButton>
        <p>
          Not registered yet? &nbsp;
          <Link to="/auth/register" className="text-teal-600 underline">
            Go to Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
