import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate(); // programmatically change the url
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    // prevents the page from refreshing
    e.preventDefault();

    // firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/')
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    // prevents the page from refreshing
    e.preventDefault();

    // firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // user created successfully
        console.log(auth);
        if (auth) {
          navigate('/'); // history of the browser
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign in
          </button>
        </form>

        <p>
          By signing-in you agree to the website's condition so fuse adn sale.
          Please seee our PRivany Notice, our cookies notice and our interest
          based ads notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
