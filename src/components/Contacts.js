import React, { useState } from "react";
import "../css/contacts.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../store/action-creators/index.js";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


function Contacts(props){

  const dispatch = useDispatch();
  const { selectContact } = bindActionCreators(actions, dispatch);

return (
  <div className="contacts">
  <SimpleBar style={{maxHeight: 500}}>
  <ListGroup>
  <ListGroup.Item className="item">Cras justo odio</ListGroup.Item>
  <ListGroup.Item className="item">Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item className="item">Morbi leo risus</ListGroup.Item>
  <ListGroup.Item className="item">Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item className="item">Vestibulum at eros</ListGroup.Item>



  <ListGroup.Item className="item">Cras justo odio</ListGroup.Item>
  <ListGroup.Item className="item">Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item className="item">Morbi leo risus</ListGroup.Item>
  <ListGroup.Item className="item">Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item className="item">Vestibulum at eros</ListGroup.Item>
  <ListGroup.Item className="item">Cras justo odio</ListGroup.Item>
  <ListGroup.Item className="item">Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item className="item">Morbi leo risus</ListGroup.Item>
  <ListGroup.Item className="item">Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item className="item">Vestibulum at eros</ListGroup.Item>
  <ListGroup.Item className="item">Cras justo odio</ListGroup.Item>
  <ListGroup.Item className="item">Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item className="item">Morbi leo risus</ListGroup.Item>
  <ListGroup.Item className="item">Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item className="item">Vestibulum at eros</ListGroup.Item>
</ListGroup>
</SimpleBar>


   </div>
);

}



export default Contacts;
