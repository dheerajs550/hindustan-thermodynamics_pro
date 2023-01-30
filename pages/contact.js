import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='container_Contact '>
<h1 className='headingText'>Contact</h1>
    </div>
<div className='text_box '>
  <div className='text_box2 m-auto pb-5'>

  </div>



</div>
    <style jsx>{`
.container_Contact {
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

`}</style>
    </>
  )
}

export default Contact
