import Section3 from "./Section3"
import Section4 from "./Section4"
import Section5 from "./Section5"
import Section8 from "./Section8"
// import AboutUs from "../component/AboutUs"
// import Portfolio from "./Portfolio"
import Porfolio2 from "../component/Porfolio2"
// import News from "./News"
import AboutUs from "../component/AboutUs"
import Banner from "./Banner";
import News2 from "../component/News2"




function Home() {
  return (
   <>
   <Banner title="Become part of the amazing Esport community"
   discription="It is very important for the customer to be aware of the fact that the customer needs to be able <br/> 
        to decorate the product in the two elements"
    primaryBtnText="Get Start"
    secondaryBtn="Go To Discord"/>
    


  
   <AboutUs/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Porfolio2/>
     <News2/>
    <Section8/>

   </>
  )
}

export default Home;