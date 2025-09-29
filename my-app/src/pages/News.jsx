
// import {Container} from 'react-bootstrap'
// import Nav from 'react-bootstrap/Nav';
// import { Col, Row } from "react-bootstrap";
import Banner from './Banner';
import News2 from "../component/News2";





function News() {
  return (
   <>
   <Banner title=" News part of the amazing Esport community "
   discription="It is very important for the customer to be aware of the fact that the customer needs to be able
        to decorate the product in the two elements"
    primaryBtnText="Get Start"
    secondaryBtn="Go To Discord"/>
    
   <News2/>
   
   </>
  )
}

export default News;