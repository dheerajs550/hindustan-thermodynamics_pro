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
      <div className="out_testi col-md-6 mt-5 m-auto"> <Slider {...settings}>
         
            <div className="testibox d-flex justify-content-center align-items-center  flex-column">
                <h1 className="text-center">Icon</h1>
                <p className="text-center">“Confluence is our linchpin for everything.<br/> 
                ‘How do I set up my dev box?’ ‘How do I get my work going?’ <br/>
                Whatever they want to know, it’s all there.”</p>
              
            </div>
         
            <div className="testibox d-flex justify-content-center align-items-center  flex-column">
                <h1 className="text-center">Icon</h1>
                <p className="text-center">“Confluence is our linchpin for everything.<br/> 
                ‘How do I set up my dev box?’ ‘How do I get my work going?’ <br/>
                Whatever they want to know, it’s all there.”</p>
              
            </div>
         
            <div className="testibox d-flex justify-content-center align-items-center  flex-column">
                <h1 className="text-center">Icon</h1>
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
    // background:red;    
    border-radius: 1.5em;
    box-shadow: 0 0 20px 8px #d0d0d0;
}
.testibox{
    height: 21rem;
    border-radius: 1.5em;
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
`}</style>
    </>
  )
}

}

















  