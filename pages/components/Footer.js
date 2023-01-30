import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Contact from './../contact';
import Link from 'next/link';
const Footer = () => {
  return (<>
    <footer className='footercolor row ml-0 mr-0 justify-content-around pt-5' >
   <div className=' Footer col-md-4'>
    <img src='logo1.jpeg' alt="footer_logo" style={{width:"25%" , height:"5rem"}} />
  <p className='text-color' >No. 0731-4679229<br/>
Address - 103, Gulshan Apartment, 132 Saket Nagar, Indore (M.P.) 452018
 </p>
   </div>
   <div className=' Footer col-md-3 d-flex flex-column justify-content-between'>
        <Link className="Linkss "  href="/" style={{ textDecoration:"none" , color:"#000"}} > home<span className="sr-only">(current)</span></Link>
        <Link className="Links"  href="/about" style={{ textDecoration:"none"  , color:"#000"}} >About</Link>
        <Link className="Links "  href="/products" style={{ textDecoration:"none"  , color:"#000"}} >Products</Link>
        <Link className="Links"  href="/contact" style={{ textDecoration:"none"  , color:"#000"}} >Contact</Link>
  
   </div>
   <div className=' Footer col-md-3 d-flex  justify-content-center'>
<div className="logo111 m-2" >fb</div>
<div className="logo111 m-2" >t</div>
<div className="logo111 m-2" >y</div>
<div className="logo111 m-2" >i</div>
   </div>
   
   <div className='col-12 line'>
   <p>
    All Rights Reserved. HINDUSTAN THERMODYNAMICS
 (Terms of Use)<br/>
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
  height:50px ;
  color:#fff;
  background:#333;

  }

  .logo111{
    font-size:2rem;
    padding: 15px;
    display:flex;
    height:50px;
    width: 50px;
  background-image: linear-gradient(180deg, #1596d4 6.96%, #ffcf2a 90.95%);
    
    // background-image: linear-gradient(45deg, #ffcf2a 6.96%, #f26322 90.95%);
    border-radius:50%;
  color:#fff;
  justify-content:center;
    align-items:center;
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

  