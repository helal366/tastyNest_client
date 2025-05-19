import React, { useContext } from "react";
import AuthContext from "../contexts-providers/AuthContext";
import { Link } from "react-router";
import GoogleSignInButton from "../components/GoogleSignInButton";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  // console.log(user);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    // console.log(formData, email, password);
    userLogin(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
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
          <button type="submit" className="btn btn-neutral mt-2">
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
