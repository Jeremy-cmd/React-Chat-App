import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../store/action-creators/index.js";
import auth from "../auth/auth.js";

function Register(){

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { register, login } = bindActionCreators(actions, dispatch);
  console.log(state);

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    redirectToReferrer: false
  });


  function setUserData(e) {
    console.log(e.target.name);
    setUser({...user, [e.target.name]: e.target.value});

  }

  function submit(e) {
    e.preventDefault();
    const userData = {
      username: user.username,
      email: user.email,
      password: user.password
    };

    const userSignin = {
      email: user.email,
      password: user.password
    };

    register(userData);
    login(userSignin).then((data) => {
      if(!data){

      //  setUser({...user, error: data.error});
      }
      else{
        auth.authenticate(data, () => {
          setUser({...user, redirectToReferrer: true});
        });
      }

    });
    console.log(state);
  }


    const {from} = {
       from: {
         pathname: '/chat'
       }
   };

   const {redirectToReferrer} = user
   if (redirectToReferrer) {
       return (<Redirect to={from}/>);
   }


return (

  <div >

    <Form>

    <Form.Group  className="mb-3" controlId="formBasicText">
      <Form.Control name="username" className="input" type="text" onChange={setUserData} placeholder="Enter username" />
    </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicEmail">
        <Form.Control name="email" className="input" type="email" onChange={setUserData} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control name="password" className="input" type="password" onChange={setUserData} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submit}>
        Register
      </Button>

    </Form>


  </div>
);

}

export default Register;
