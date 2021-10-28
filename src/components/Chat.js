import React, {useEffect, useState} from "react";
import { io } from "socket.io-client";
import "../css/chat.css"
import Contacts from "./Contacts.js";
import PrivateChat from "./PrivateChat.js";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../store/action-creators/index.js";

const socket = io("http://localhost:3002");



function Chat(props){

  const [contacts, setContacts] = useState([]);
  const user = useSelector(state => state.signedInUser);
  const stateContacts = useSelector(state => state.userContacts);

  function addContacts(){
    setContacts(stateContacts);
  }

useEffect(() => {
  addContacts();
  socket.on("connect", ()=>{
    console.log(`you connected with id: ${socket.id}`);
    socket.emit("send-message", "hello", "room");
  });

  socket.on("receive-message", message => {

  });



}, []);

return (
    <div>

          <Contacts/>

          <PrivateChat/>

     </div>



)

}

export default Chat;
