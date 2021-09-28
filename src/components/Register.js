import React from "react";
import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap";

function Register(){
return (
  <div >


  <Form>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control className="input" type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control className="input" type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    </Form.Group>
    <Button variant="primary" type="submit">
      Register
    </Button>
    
</Form>


  </div>
);

}

export default Register;
