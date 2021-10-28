import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/message.css";
import { Card } from "react-bootstrap";

function Message(props){

  return (

<div>

        <div className="msgReceive">
              sending
        </div>

      <div className="msgSend">
        this is a message
      </div>

      <div className="msgReceive">
        this is a message
      </div>

      <div className="msgSend">
        this is a message
      </div>

      <div className="msgReceive">
        this is a message
      </div>

      <div className="msgSend">
        this is a message
      </div>

  </div>



  );

}

export default Message;
