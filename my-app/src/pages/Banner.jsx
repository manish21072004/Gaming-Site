
import Button from 'react-bootstrap/Button';   // ✅ correct import
import Marquee from "react-fast-marquee";
import img1 from "../assets/img.jpg/19b00c9364a36e4802baf3fba8a8c8cf3f71ff0b.png";
import img2 from "../assets/img.jpg/6670836187b7b947c5a6877e710432ec2dc704dc.png";
import img3 from "../assets/img.jpg/6169fdab23a12562b15b9a489367a91ad83d411d.png";
import img4 from "../assets/img.jpg/ac78ee9cc3707d00e4c57b235c224c1eac4440bd.png";
import img5 from "../assets/img.jpg/be3a0a855035a128941d22d237ceeaa956f0c353.png";
import img6 from "../assets/img.jpg/fa152a040dd8be277ad55e65947982e265e3436c.png";






function Banner({title,discription,primaryBtnText,secondaryBtn }) {
  return (
    <>
     <section className='main'>
    <div className='containt'>
      <h4>{title}
      </h4>
      <p>{discription}</p>
       
        <Button className='btn' style={{borderRadius: "30px", width:"140px",margin:"15px" }}>{primaryBtnText}</Button>
        <Button className='btn'style={{borderRadius: "30px", width:"140px",background:"none",borderColor:"white" }}>{secondaryBtn}</Button>
        
    </div>
    </section>
     <div className="carow">
    <Marquee>
  <img className='image' style={{ width: "50%", margin: "10px" }} src={img1} alt="" />
  <img className='image' style={{ width: "50%", margin: "10px" }} src={img2} alt="" />
  <img className='image' style={{ width: "50%", margin: "10px" }} src={img3} alt="" />
  <img className='image' style={{ width: "50%", margin: "10px" }} src={img4} alt="" />
  <img className='image' style={{ width: "50%", margin: "10px" }} src={img5} alt="" />
  <img className='image' style={{ width: "50%", margin: "10px" }} src={img6} alt="" />
</Marquee>

    </div>
    </>
  );
}

export default Banner;

