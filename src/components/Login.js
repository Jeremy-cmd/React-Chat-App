import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../store/action-creators/index.js";

function Login(){

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { login } = bindActionCreators(actions, dispatch);
  console.log(state);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function onChangeUser(e) {
    setUserName(e.target.value);

  }

  function onChangePassword(e) {
    setPassword(e.target.value);

  }

  function submit(e){
    e.preventDefault();
    console.log("username: " + username);
    console.log("password: " + password);
    console.log(state);

  }


return (
      <div >


      <Form>
        <h2> Chat App </h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control  id="username" className="input" type="text" onChange={onChangeUser} placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control id="password" className="input" type="password" onChange={onChangePassword} placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submit}>
          Log In
        </Button>
        <Link className="registerLink" to="/register"> Register </Link>
    </Form>


      </div>
);
}

export default Login;
