import React from 'react'

const HotProducts = () => {
  return (
    <> 
    <div className='bgcolor21' >

    <h2 className=' text-center mt-5'>thos is second box </h2>
    <p className=' text-center'> From marketing and sales to development and operations, we have templates for every type of team <br/> 
        and project to get your team doing the real work right away.

See all templates</p>
    <div className='hot_Products_box m-auto '>
{/* ............. */}
<div className="row m-auto"> 
  <div className="column">
    <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" style={{width:"100%"}}/>
    <img src="https://m.media-amazon.com/images/I/51mZf+UsQ9L._SX300_SY300_.jpg" style={{width:"100%"}}/>

  </div>
  <div className="column">
  <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" style={{width:"100%"}}/>
    <img src="https://m.media-amazon.com/images/I/51mZf+UsQ9L._SX300_SY300_.jpg" style={{width:"100%"}}/>


  </div>
  <div className="column">
  <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" style={{width:"100%"}}/>
    <img src="https://m.media-amazon.com/images/I/51mZf+UsQ9L._SX300_SY300_.jpg" style={{width:"100%"}}/>
  </div>
 
</div>

{/* ... */}
    </div>
    </div>

    <style jsx>{`
.hot_Products_box {
  
//   background:var(--orange);
//   box-shadow:var(--boxShadow);
  height: 100%;
  width: 70%;
 
}
  
// .img_box{
//   background:red;
//   box-shadow:var(--boxShadow);
//   height: 40vh;
//   width: 30%;
// }

.row {
    display: -ms-flexbox; 
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 4px;
   
  }
  
//   /* Create four equal columns that sits next to each other */
  .column {
    -ms-flex: 33.3%; 
    flex: 33.3%;
    max-width: 33.3%;
    padding: 0 4px;
  }
  
  .column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
  }
  
//   /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    .column {
      -ms-flex: 50%;
      flex: 50%;
      max-width: 50%;
    }
  }
  
//   /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;
    }
  }

`}</style>
    </>
  )
}

export default HotProducts
