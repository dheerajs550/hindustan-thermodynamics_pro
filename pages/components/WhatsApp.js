import Link from 'next/link'
import React from 'react'

const WhatsApp = () => {
  return (
    <>
    <Link href={"https://web.whatsapp.com/"}>

<div className="logo111" >w</div>
    </Link>
   
<style jsx>{`
  
.logo111{
    border:3px solid #fff;
    padding: 15px;
    display:flex;
    height:60px;
    width: 50px;
   background:#00FF00;
   border-radius:50%;
    color:#fff;
    justify-content:center;
    align-items:center;
     box-shadow:0 5px 15px rgba(0, 0, 0, 0.25);
    position:fixed;
    justify-content:center;
    align-items:center;
    font-size:3rem;
    padding:0 30px;
    top: 81%;
    right:5%;
   
  }


`}</style>
   
    </>
  )
}

export default WhatsApp
