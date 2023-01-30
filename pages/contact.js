import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='container_Contact '>
<h1 className='headingText'>Contact</h1>
    </div>
<div className='contect_div text_box p-3 d-md-flex mb-5'>
  <div className=' col-md-5'>
  <h2>HINDUSTAN THERMODYNAMICS</h2>
  
<div className='col-12 div11 d-md-flex'>
<div className="logo111" >ht</div>
<p>Contact Person<br/>
Mr. Sushil Pathak </p>
</div>
<div className='col-12 div11 d-md-flex'>
<div className="logo111" >ht</div>
<p>Address<br/>House No. 129, DKN, Scheme No. 74-C, Vijay Nagar, Indore, Madhya
 Pradesh, India - 452010 </p>
</div>
<div className='col-12 div11 d-md-flex'>
<div className="logo111" >ht</div>
<p>Call<br/>0909090909 </p>
</div>
<div className='col-12 div11 d-md-flex'>
<div className="logo111" >ht</div>
<p>Phone No.<br/>0909090909 </p>
</div>
<div className='col-12 div11 d-md-flex'>
<div className="logo111" >ht</div>
<p>Email<br/>avc@gmail.com </p>
</div>



     
  </div>

    <div className=' col-md-5  ' style={{borderLeft:"2px solid #f26322"}}>
  <h2 className='pt-5' >Contact form</h2>

      <form>
<div className='col-12 div11 d-md-flex'>
<label>Your name</label>
<input type={"text"} placeholder={"enter your name"}/>
</div>
<div className='col-12 div11  d-md-flex'>
<label>Your Email</label>
<input type={"email"} placeholder={"enter your email"}/>
</div>
<div className='col-12 div11  d-md-flex'>
<label>Your Phone</label>
<input type={"number"} placeholder={"enter your number"}/>
</div>
<div className='col-12 div11  d-md-flex'>
<label>Your Message</label>
<textarea type={"textarea"} placeholder={"some message"}/>
</div>
<input className='submit11' type={"submit"}/>
      </form>

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
.contect_div{
  background:#fff;
  justify-content:space-between;
  align-items:center;
  font-size:1.2rem;
  padding:30px 15px;
  box-shadow:0 5px 15px rgba(0, 0, 0, 0.25);
  height:100%;
  width: 90%;
  border-radius:13px;
  left:50%;
  transform:translate(5%);
}
textarea,
input{
  background:#f4f5f7;
  border: none;
  border-radius:13px;
  padding: .5rem;
}

.div11{
  margin-bottom: 10px;
  justify-content:space-between;
  align-items:center;
}
.div11 p{
  text-align: right;
}
.submit11{
  // height:100%;
  width: 100%;
  background-image: linear-gradient(120deg, #fff 6.96%,  #1596d4 90.95%); 
  //  height: 70vh;
  background-image: linear-gradient(45deg, #ffcf2a 6.96%, #f26322 90.95%);

}
.logo111{
  font-size:2rem;
  padding: 15px;
  display:flex;
  height:50px;
  width: 50px;
  background-image: linear-gradient(45deg, #ffcf2a 6.96%, #f26322 90.95%);
  border-radius:50%;
color:#fff;
justify-content:center;
  align-items:center;
}
`}</style>
    </>
  )
}

export default Contact
