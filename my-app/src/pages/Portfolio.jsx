import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";
import Banner from './Banner';
import Porfolio2 from "../component/Porfolio2";

function Portfolio() {

  return (
    <>
      <Banner title="portfolio part of the amazing Esport community"
   discription="It is very important for the customer to be aware of the fact that the customer needs to be able
        to decorate the product in the two elements"
    primaryBtnText="Get Start"
    secondaryBtn="Go To Discord"/>
    
    <Porfolio2/>
    </>

  );
}

export default Portfolio;
        











