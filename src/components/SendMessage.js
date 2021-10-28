import React from "react";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import send from "../assets/images/001-paper-plane.png";
import "../css/chat.css";


function SendMessage() {

  return (
    <InputGroup className="mb-3 messageInput">
    <FormControl
      placeholder="Message"
      aria-label="Message"
      aria-describedby="basic-addon2"
    />
    <Button className="buttonSend" variant="outline-secondary" id="button-addon2">
          <img src={send} />
    </Button>
  </InputGroup>
);

}

export default SendMessage;
