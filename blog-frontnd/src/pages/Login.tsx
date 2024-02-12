
import axios from "axios";
import { useContext, useRef, FormEvent } from "react";
import { Context } from "../context/Context";

function Login(): JSX.Element {
  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://blogiy-mern-back.onrender.com/api/auth/login", {
        username: userRef.current!.value,
        password: passwordRef.current!.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="Login-Title">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          className="loginInput"
          type="text"
          id="username"
          placeholder="Enter your email..."
          ref={userRef}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          className="loginInput"
          type="password"
          id="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton  bg-[#FFA726] text-white font-bold py-0 px-4 rounded" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      {/* <button className="RegisterButton">Register</button> */}
    </div>
  );
}

export default Login;