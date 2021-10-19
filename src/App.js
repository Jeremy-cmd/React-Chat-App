import React from "react";
import {Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./auth/PrivateRoute.js";
import "./css/styles.css";

function App() {
  return (
    <div className="App">

    <BrowserRouter>

      <Switch>

          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/chat" component={Chat} />

      </Switch>
      <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
