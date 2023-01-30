import React, { Component } from "react";
import Slider from "react-slick";

export default class Testimonials extends Component {
  render() {
    const settings = {
    
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 2000,
      cssEase: "linear"
    };


  return (
    <>
      <div className='Testimonials mt-5'>
      <h2  className='text-center mb-5 '>this is Testimonials </h2>  
      <div className="out_testi col-md-6 mt-5  "> 
      <Slider {...settings}>
         
            <div className="testibox d-flex justify-content-center align-items-center  flex-column">
               <div className="logo111 m-2" >fb</div>
                <p className="text-center">“Confluence is our linchpin for everything.<br/> 
                ‘How do I set up my dev box?’ ‘How do I get my work going?’ <br/>
                Whatever they want to know, it’s all there.”</p>
              
            </div>
         
            <div className="testibox d-flex justify-content-center align-items-center  flex-column">
               <div className="logo111 m-2" >fb</div>
                <p className="text-center">“Confluence is our linchpin for everything.<br/> 
                ‘How do I set up my dev box?’ ‘How do I get my work going?’ <br/>
                Whatever they want to know, it’s all there.”</p>
              
            </div>
         
            <div className="testibox d-flex justify-content-center align-items-center  flex-column">
               <div className="logo111 m-2" >fb</div>
                <p className="text-center">“Confluence is our linchpin for everything.<br/> 
                ‘How do I set up my dev box?’ ‘How do I get my work going?’ <br/>
                Whatever they want to know, it’s all there.”</p>
              
            </div>
         
          
        </Slider>
        </div>
      <h3  className='text-center mb-5 mt-5'> 75,000+ customers rely on Confluence to drive progress that counts</h3>
      </div>

      <style jsx>{`
.Testimonials {
   background:#fff;
  height: 100%;
  width: 100%;
}
.out_testi{
  justify-content:space-between;
  align-items:center;
  font-size:1.2rem;
  padding:0 30px;
  
  box-shadow:0 5px 15px rgba(0, 0, 0, 0.25);
  width:90%;
  // height:80px;
  border-radius:13px;
  // position:fixed;
  top: 20px;
  left:50%;
  transform:translate( -50%);

}
.testibox{
    height: 21rem;
    border-radius: 13px;
}

:global(.slick-next) {
    right: 30px;
  }
  :global(.slick-prev) {
    left: 30px;
    z-index:1;
  }

  :global(.slick-prev:before){
    font-size: 35px;
color: #0062cc;
line-height: 9;
  }
  :global( .slick-next:before){
    font-size: 35px;
color: #0062cc;
line-height: 9;
  }
  .logo111{
    font-size:2rem;
    padding: 15px;
    display:flex;
    height:50px;
    width: 50px;
  background-image: linear-gradient(180deg, #1596d4 6.96%, #ffcf2a 90.95%);
    
    // background-image: linear-gradient(45deg, #ffcf2a 6.96%, #f26322 90.95%);
    border-radius:50%;
  color:#fff;
  justify-content:center;
    align-items:center;
  }
`}</style>
    </>
  )
}

}

















  