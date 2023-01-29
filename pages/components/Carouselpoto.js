import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 500,
      cssEase: "linear"
    };
    return (<>
     
        <h2>this is some text</h2>
        <Slider {...settings}>
          <div className="pohoto_Box_Slaitd">
          <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" style={{width:"100%"}}/>
   
          </div>
          <div className="pohoto_Box_Slaitd">
          <img src="https://m.media-amazon.com/images/I/91GUw+VWZ0L._SX679_.jpg" style={{width:"100%"}}/>
    
          </div>
          <div className="pohoto_Box_Slaitd">
          <img src="https://m.media-amazon.com/images/I/51mZf+UsQ9L._SX300_SY300_.jpg" style={{width:"100%"}}/>

          </div>
         
        
       
        </Slider>
      
      <style jsx>{`
.pohoto_Box_Slaitd {
  // background:red;
  // box-shadow:var(--boxShadow);
  height: 50vh;
  width: 100%;
 
}
  
.CarouselPotoBox{
  // background:var(--yellow);
  // box-shadow:var(--boxShadow);
  height: 50vh;
  width: 99%;
}
:global(.slick-next) {
    right: 30px;
  }
  :global(.slick-prev) {
    left: 30px;
    z-index:1;
  }
`}</style>
      </>

    );
  }
}