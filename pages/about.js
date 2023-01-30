import React from 'react'

const about = () => {
  return (
    <>
    <div className='container_about '>
<h1 className='headingText'>ABOUT_US</h1>
    </div>
<div className='text_box '>
  <div className='text_box2 m-auto pb-5'>

<h2 className='mainheding'>Hindustan Thermodynamics</h2>
<p>Welcome to the world of Industrial Heating Systems. As the leading professional manufacturers and service providers,
   in the field of various kinds of heating elements, our valuable experience over the years, come handy in
   impressive product development. Consider us the synonyms of durability, reliability and utmost customer satisfaction.</p>
 <p className='heading_text'> Our vision :</p>
  <p> We strive to deliver the best energy and environmental solutions to the ultimate content of our clients.</p>
<p className='heading_text'> Our values and beliefs :</p>
<p>We are bound by the trust of our customers and work to repeatedly establish our worth with our honesty, quality of work, commitment, product perfection and prioritising our clients.</p>

<p className='heading_text'>Purpose of service :</p>
<p>Promoting and prioritising the welfare of our planet, we laud the concept of energy saving in terms of our high-end efficient products achieved through the perfection and incorporation of the latest technology. Thus, right from the beginning, from the raw materials to the finished product, we feel delighted to be able to contribute to the cause of power saving.</p>
<p className='heading_text'>Our products :</p>
<p>We are the leading manufacturers and design developers of various kinds of heat transfer and treatment equipments. Our instrumentation includes :
Industrial boilers
TF heaters
</p>

  </div>



</div>
    <style jsx>{`
.container_about {
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
  background-image: linear-gradient(180deg, #fff 6.96%,  #1596d4 90.95%);  height: 70vh;
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
}
.mainheding{
  border-bottom: 5px solid #f26322;
  max-width:450px ;
}

`}</style>
    </>
  )
}

export default about
