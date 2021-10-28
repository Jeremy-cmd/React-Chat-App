import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/chat.css";
import Message from "./Message.js";
import SendMessage from "./SendMessage.js";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../store/action-creators/index.js";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

function PrivateChat(props){

  const selectedContact = useSelector(state => state.selectedContact);




  return (
  <div className="chat">

    <SimpleBar className="simple" style={{maxHeight: 450}}>

      <div className="chatBody">
      <Message/>
      <Message/>

      </div>

    </SimpleBar>

    <SendMessage/>


  </div>
  );

}

export default PrivateChat;
