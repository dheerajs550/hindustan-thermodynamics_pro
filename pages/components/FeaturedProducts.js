import React from 'react'

const FeaturedProducts = () => {
  return (
    <><div style={{background:"var(--footerColor)" , width:"100%"}}>

      <h1 className='text-center mt-5'>Featured Products</h1>
<div className='row ml-0 mr-0 justify-content-around'>
 <div className="card_color col-md-3 mb-3  pl-0 pr-0 " >
  <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" className="card-img-size"  alt="..." style={{width:"100%"}}/>
  <div className="card-body">
    <p className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


<div className="card_color col-md-3 mb-3   pl-0 pr-0" >
  <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" className="card-img-size"  alt="..." style={{width:"100%"}}/>
  <div className="card-body">
    <p className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card_color col-md-3 mb-3  pl-0 pr-0" >
  <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" className="card-img-size"  alt="..." style={{width:"100%"}}/>
  <div className="card-body">
    <p className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

    </div>
      </div>
<div className=' bgcolor5  d-flex justify-content-center align-items-center flex-column p-5' style={{width:"100%"}} >
<h1 className=' text-center'>Start free with Confluence</h1>
<button type="button" className="btn btn-primary">Primary</button>
</div>

      <style jsx>{`
.Featured_Products_box {
  background:var(--footerColor);
  height: 100vh;
  width: 100%;
}
.card-img-size{
  border-radius: 1.5em 1.5em 0 0;
}
.card_color:hover{
  box-shadow: 0 0 20px 8px #d0d0d0;
}

.card_color{
  background:#fff;
  border-radius: 1.5em;
}
  


`}</style>
    </>
  )
}

export default FeaturedProducts
