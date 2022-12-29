import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
  <div className="header_">
   <Col>
   <div className="image">
    <div style={{textAlign:"center",height: "60px"}}>  
      <img src="https://storage.googleapis.com/builder.zenflow.de/zolar-v18b/www/assets/262c9df2-ab1b-4ab9-a7cd-bf185ec75d87.png"
       alt="zolar:logo">
        </img>
    </div>
   
   </div>
   <p>Individuelle Beratung</p>
  
   </Col> 
        

        </div>

 
   
  );
};

export default Header;