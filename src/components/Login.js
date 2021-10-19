import React, {useState, useEffect} from "react";
import { Link, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../store/action-creators/index.js";
import auth from "../auth/auth.js";


function Login(props){


  const dispatch = useDispatch();
  const { login } = bindActionCreators(actions, dispatch);


  const [user, setUser] = useState({
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false
  });


  function onChangeUser(e) {
    setUser({...user, [e.target.name]: e.target.value});

  }



  function submit(e){
    e.preventDefault();
    const userData = {
      email: user.email,
      password: user.password
    };
    login(user).then((data) => {
      if(!data){

      //  setUser({...user, error: data.error});
      }
      else{
        auth.authenticate(data, () => {
          setUser({...user, redirectToReferrer: true});
        });
      }
    });




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
          <h2> Chat App </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control name="email" id="username" className="input" type="email" onChange={onChangeUser} placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control name="password" id="password" className="input" type="password" onChange={onChangeUser} placeholder="Password" />
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
