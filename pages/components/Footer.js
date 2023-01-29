import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
const Footer = () => {
  return (<>
    <footer className='footercolor row ml-0 mr-0 justify-content-around p-5' >
   <div className=' Footer col-md-4'>
    <img src='logo1.jpeg' alt="footer_logo" style={{width:"25%" , height:"5rem"}} />
  <p className='text-color' >No. 0731-4679229<br/>
Address - 103, Gulshan Apartment, 132 Saket Nagar, Indore (M.P.) 452018
 </p>


   </div>
   
   <div className=' Footer col-md-4'>
   <form>
      <input className='col-12 mb-4 ionput_fild p-3' type='email' id='form1Example1' placeholder='Email address' />
      <input className=' col-12 mb-4 ionput_fild p-3 ' type='number'  id='form1Example2' placeholder='Phoon number' />
      <textarea className='col-12 mb-4  ionput_fild p-3' type='text'  id='form1Example1' placeholder='Enter some text' />

      <input type='submit' className='ionput_fild p-3' />
    </form>
   </div>
   <div className='col-12 line'>
   All Rights Reserved. HINDUSTAN THERMODYNAMICS
 (Terms of Use)<br/>
Developed & Managed Dheeraj sharma.
   </div>
      </footer>

      <style jsx>{`
.Footer {
  height: 45vh;
}
.text-color{
  color:var(--headingTextcolor);
  font-size:1.5rem;
}
.ionput_fild{
  background:#fff;
  color:#000;
  box-shadow: 0 0 20px 8px #d0d0d0;
  border-radius: 1.5em;
  border: none;

}
  .line{
    border-top: 3px solid var(--gray); 
  }


`}</style>
  </>
  )
}

export default Footer
