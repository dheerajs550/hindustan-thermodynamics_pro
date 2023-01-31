import React from 'react'

const FeaturedProducts = () => {
  return (
    <><div className='Featured_Products_box pt-3 pb-5' >

      <h1 className='text-center mb-5 mt-3'>Featured Products</h1>
<div className='row ml-0 mr-0 justify-content-around p-3'>
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
<div className=' bgcolor2  d-flex justify-content-center align-items-center flex-column p-5' style={{width:"100%"}} >
<h1 className=' headtextsub text-center'>SUBSCRIBE FOR  <span>NEWSLETTER</span></h1>

<form className="fromcolor d-md-flex justify-content-center align-items-center  " action='' method='post'>
  <label className='label_text' for="email">Sign up to get latest updates and news.</label>
  <input className='inputEmail m-2 ' type="email" id="email" name="Email"  placeholder='Enter your email' />
  <input className='btnsubmit m-2' type="submit"/>
</form>

</div>

      <style jsx>{`
.Featured_Products_box {
  background:var(--footerColor);
  height: 100%;
  width: 100%;
}
.card-img-size{
  border-radius: 13px 13px 0 0;
}
.card_color:hover{
  box-shadow: 0 0 20px 8px #d0d0d0;
}

.card_color{
  background:#fff;
  border-radius: 13px;
}
  
.btnsubmit{
  background:#2874B9;
  border-radius: 3px;
  border:none;
  color:#fff;
  font-size:1.2rem;
  padding:7px 13px;
}
.inputEmail{
  background:#fff;
  border-radius: 3px;
  border:1px solid #999;
  color:#000 ;
  font-size:1.2rem;
  padding:7px 13px;
}
.label_text{
  font-size:1rem;
  color:#333 ;
}
.headtextsub{
  color:333;
}
.headtextsub span{
  color:#2874b9;

}
.fromcolor{
   padding:7px 70px;
  background:#fff;
}
`}</style>
    </>
  )
}

export default FeaturedProducts
