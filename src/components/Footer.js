import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../Assets/Logo.jpg";
import "../App.css";
import React, {useState} from "react";

const Footer = () => {
  const [data,setData] = useState(null)
  const [print,setPrint] = useState(false)
  function getData(val){
    setData(val.target.value)
    setPrint(false)
    console.warn(val.target.value)
  }
  return (
    <div className="text-white bg-primary mt-5 footer--pin ">
      
      <Container fluid>
        <Row>
          <Col className="m-1">
            <img src={logo} className="logoDel m-3"></img>
            <p>
              <b>Institut Teknologi Del Jl. </b>
            </p>
            <p>
              Sisingamangaraja, Sitoluama, Laguboti, Toba Samosir Sumatera Utara
              - Indonesia
            </p>
            <br />
            <p>
              +62822988XXXXX <br></br>Informatika@del.ac.id
            </p>
          </Col>
          <Col>
            <Container>
            <p className="mt-5">
              Enter your email address to subscribe to this blog and receive
              notifications of new posts by email.
            </p>
            <input type="text" onChange={getData} placeholder="Enter Email Address"></input>

            <br></br>
            <br></br>
            <div className="d-flex  justify-content-end">

            <Button onClick={()=>setPrint(true)} className="rounded-5 opacity-75" variant="secondary"><i>Subscribe</i></Button>{' '}
            
            </div>
            {
              print?
              <p>Email telah dikirim ke {data}</p>
              :null
            }
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
