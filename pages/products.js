import React from 'react'

const products = () => {
  return (
    <>
    <div className='container_products '>
<h1 className='headingText'>products</h1>
    </div>
<div className='text_box '>
  <div className='text_box2 m-auto pb-5'>
    <p className='heading_text'>Industrial Furnaces</p>

    <div className='d-md-flex '>
      <div className='prodact_img_box col-md-4 p-3 m-md-2 mt-2 '>
      <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="..." style={{width:"100%"}}/>
      </div>
      <div className='prodact_img_box col-md-4 p-3 m-md-2 mt-2 '>
      <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="..." style={{width:"100%"}}/>
      </div>
      <div className='prodact_img_box col-md-4 p-3 m-md-2 mt-2'>
      <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="..." style={{width:"100%"}}/>
      </div>

    </div>


    <p className='heading_text mt-3'>Industrial Ovens</p>

<div className='d-md-flex '>
  <div className='prodact_img_box col-md-4 p-3 m-md-2 mt-2 '>
  <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="..." style={{width:"100%"}}/>
  </div>
  <div className='prodact_img_box col-md-4 p-3 m-md-2 mt-2 '>
  <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="..." style={{width:"100%"}}/>
  </div>
  <div className='prodact_img_box col-md-4 p-3 m-md-2 mt-2'>
  <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="..." style={{width:"100%"}}/>
  </div>

</div>
<p className='heading_text mt-3'>Other Products</p>

<div className='d-md-flex '>
  <div className='prodact_img_box col-md-4 p-3 m-md-2 mt-2 '>
  <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="..." style={{width:"100%"}}/>
  </div>
  <div className='prodact_img_box col-md-4 p-3 m-md-2 mt-2 '>
  <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="..." style={{width:"100%"}}/>
  </div>
  <div className='prodact_img_box col-md-4 p-3 m-md-2 mt-2'>
  <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="..." style={{width:"100%"}}/>
  </div>

</div>

  </div>



</div>
    <style jsx>{`
.container_products {
  background-image: linear-gradient(180deg, #1596d4 6.96%, #fff 90.95%);
  // background:var(--logoTestcolor);
  height: 50vh;
  width: 100%;
}
.headingText{
  color:#f26322;
 
  max-width:700px;
  position:absolute;
  top:30%;
  left:50%;
  transform:translate(-50%,-50%)
}
.text_box{
  background-image: linear-gradient(180deg, #fff 6.96%,  #1596d4 90.95%); 
   height: 70vh;
  width: 100%;
  height: 100%;
}
.text_box2{
  width: 90%;
  height: 100%;
}
.heading_text{
  font-size:2rem;
  color:#000;
  border-bottom: 5px solid #f26322;
  max-width:270px ;
}
.prodact_img_box{
  background:#fff;
  object-fit: cover;
  border-radius:13px;
}


`}</style>
    </>
  )
}

export default products
