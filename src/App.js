import React from "react";
import {Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/styles.css";

function App() {
  return (
    <div className="App">
      
      <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/chat" component={Chat} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
