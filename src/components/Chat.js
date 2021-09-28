import React, {useEffect, useState} from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");



function Chat(){

useEffect(() => {
  socket.on("connect", ()=>{
    console.log(`you connected with id: ${socket.id}`);
    socket.emit("send-message", "hello", "room");
  });

  socket.on("receive-message", message => {

  });



}, []);

return <h1> dfdf </h1>;

}

export default Chat;
