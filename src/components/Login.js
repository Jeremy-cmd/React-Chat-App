import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from "react-bootstrap";


function Login(){


return (
      <div >


      <Form>
        <h2> Chat App </h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control  className="input" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control className="input" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
        <Link className="registerLink" to="/register"> Register </Link>
    </Form>


      </div>
);
}

export default Login;
