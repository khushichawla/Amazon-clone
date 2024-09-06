import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header"; // check this, should be caps or not
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('The user is: ', authUser);
      
      if (authUser) {
        // user just logged in or was already logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM Convention
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route exact path="/" element={<><Header/><Home/></>}/>
          <Route exact path="/checkout" element={<><Header/><Checkout/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;