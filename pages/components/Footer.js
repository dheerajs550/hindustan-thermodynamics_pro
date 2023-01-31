import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Contact from './../contact';
import Link from 'next/link';
const Footer = () => {
  return (<>
    <footer className='footercolor row ml-0 mr-0 justify-content-around pt-5' >
   <div className=' Footer col-md-3 d-flex justify-content-center align-items-center p-3'>
    <img src='logo11.png' alt="footer_logo" style={{width:"100%" , height:"100%"}} />
   </div>
   <div className=' Footer col-md-2 d-flex flex-column justify-content-between align-items-center p-3'>
    <h6 className='futaheding'>quick Link</h6>
        <Link className="Linkss "  href="/" style={{ textDecoration:"none" , color:"#000" , fontSize:"1.5em" }} > home<span className="sr-only">(current)</span></Link>
        <Link className="Links"  href="/about" style={{ textDecoration:"none"  , color:"#000" ,fontSize:"1.5em" }} >About</Link>
        <Link className="Links "  href="/products" style={{ textDecoration:"none"  , color:"#000", fontSize:"1.5em" }} >Products</Link>
        <Link className="Links "  href="/Career" style={{ textDecoration:"none"  , color:"#000", fontSize:"1.5em" }} >Career</Link>
        <Link className="Links"  href="/contact" style={{ textDecoration:"none"  , color:"#000" ,fontSize:"1.5em" }} >Contact us</Link>
  
   </div>
   <div className=' Footer col-md-3 d-flex flex-column justify-content-between align-items-center p-3'>
    <h6 className='futaheding'>Contact</h6>
    {/* <img src='logo1.jpeg' alt="footer_logo" style={{width:"25%" , height:"5rem"}} /> */}
    
    <div className='text-color '><img src='loc.svg' alt="footer_logo" style={{width:"25px" , height:"25px",margin:"3px" }} /> 03 Gulshan Apartment,<br/> 132 Saket Nagar, Indore (M.P.) 452018</div>
    <div><img src='phone.svg' alt="footer_logo" style={{width:"25px" , height:"25px" ,margin:"3px"}} />0731-4679229</div>
    <div><img src='email.svg' alt="footer_logo" style={{width:"25px" , height:"25px" ,margin:"3px"}} />email@website.com</div>
   
   </div>
   <div className=' Footer col-md-3 p-3'>
   <div className='d-flex  justify-content-center'> <h6 className='futaheding'>Follow</h6></div>
   <div className='d-flex  justify-content-center'>

<div className="logo111 m-2" ><img src='fb.svg' alt="fb" style={{width:"85%",height:"85%" }}/></div>
<div className="logo111 m-2" ><img src='ig.svg' alt="fb" style={{width:"100%",height:"100%" }}/></div>
<div className="logo111 m-2" ><img src='linkedin.svg' alt="fb" style={{width:"100%",height:"100%" }}/></div>
<div className="logo111 m-2" ><img src='twitter.svg' alt="fb" style={{width:"100%",height:"100%" }}/></div>
<div className="logo111 m-2" ><img src='youtube.svg' alt="fb" style={{width:"100%",height:"100%" }}/></div>
   </div>

   </div>
   
   <div className='col-12 line mt-2'>
   <p>
    All Rights Reserved. HINDUSTAN THERMODYNAMICS
 (Terms of Use) |
Developed & Managed Dheeraj sharma.
    </p>
   </div>
      </footer>

      <style jsx>{`
.Footer {
  height: 100%;
}
.text-color{
  color:var(--headingTextcolor);
  font-size:1rem;
}

  .line{
    border-top: 3px solid var(--gray); 
  color:#fff;
  background:#2874B9;

  }

  .logo111{
   
    display:flex;
    height:35px;
    width: 35px;
    border-radius:50%;
  color:#fff;
  justify-content:center;
    align-items:center;
  }
  .futaheding{
    font-size:2.3rem;
  }
`}</style>
  </>
  )
}

export default Footer
{/* <div className=' Footer col-md-4'>
   <form>
      <input className='col-12 mb-4 ionput_fild p-3' type='email' id='form1Example1' placeholder='Email address' />
      <input className=' col-12 mb-4 ionput_fild p-3 ' type='number'  id='form1Example2' placeholder='Phoon number' />
      <textarea className='col-12 mb-4  ionput_fild p-3' type='text'  id='form1Example1' placeholder='Enter some text' />

      <input type='submit' className='ionput_fild p-3' />
    </form>
   </div> */}
  //  .ionput_fild{
  //   background:#fff;
  //   color:#000;
  //   box-shadow: 0 0 20px 8px #d0d0d0;
  //   border-radius: 1.5em;
  //   border: none;
  
  // }

  