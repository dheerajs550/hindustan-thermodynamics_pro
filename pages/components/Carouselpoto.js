import React, { Component } from "react";
import Slider from "react-slick";

export default class Carouselpoto extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (<>
     
        
        <Slider {...settings}>
          <div className="pohoto_Box_Slaitd d-flex">
          {/* <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" style={{width:"100%"}}/> */}
            <h1 className="heading">this is heaing one WELCOME TO OUR WEBSITE </h1>

           
          </div>
          <div className="pohoto_Box_Slaitd d-flex">
          {/* <img src="https://m.media-amazon.com/images/I/91GUw+VWZ0L._SX679_.jpg" style={{width:"100%"}}/> */}
          <h1 className="heading">this is heaing one WELCOME TO OUR WEBSITE </h1>

          </div>
          <div className="pohoto_Box_Slaitd d-flex">
          {/* <img src="https://m.media-amazon.com/images/I/51mZf+UsQ9L._SX300_SY300_.jpg" style={{width:"100%"}}/> */}
          <h1 className="heading">this is heaing one WELCOME TO OUR WEBSITE </h1>

          </div>
         
        
       
        </Slider>
      
      <style jsx>{`
.pohoto_Box_Slaitd {
  // background:#1596d4;
  // box-shadow:var(--boxShadow);
  height: 70vh;
  width: 100%;
  justify-content:center;
  align-items:center;
  color:#fff;
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