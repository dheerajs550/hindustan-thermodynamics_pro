import React from 'react'
import { FiAlignJustify } from 'react-icons/fi';
import { Link } from 'next/link';

const NewNav = () => {
  return (
    <>
      <nav>
        <input type='checkbox' id={'check'}/>
        <label for='check' className='checkbtn'>
            <FiAlignJustify/>
        </label>

        <label className='logo' >HT</label>
        <ul>
            <li><a className='active' href='/'> Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/products'>Products</a></li>
            <li><a href='/contact'>Contact</a></li>
        </ul>
        
        </nav> 
<section>

</section>


<style jsx>{`
*{
    text-decoration:none;
    list-style:none;
}
nav{
    z-index:999;
    background:#fff;
    height:80px;
    width:95%;
    position:fixed;
    border-radius:13px;
    top: 20px;
    left:50%;
  box-shadow:0 5px 15px rgba(0, 0, 0, 0.25);
  transform:translate( -50%);

}
{
  
  justify-content:space-between;
  align-items:center;
  font-size:1.2rem;
  padding:0 30px;
  
 
}

label.logo{
    color:var(--logoTestcolor);
    font-size:35px;
    line-height:80px;
    padding:0 100px;
    font-weight:bold;
}

nav ul{
    float:right;
    margin-right:20px
    
}
nav ul li{
    display: inline-block;
    line-height:80px;
    margin:0 5px;
}
nav ul li a{
    color: #000;
    font-size:17px;
    padding:7px 13px;
    border-radius:3px;
    text-transform:uppercase;

}
a.active,a:hover{
    background:#1b9bff;
    transition:.5s;

}
.checkbtn{
    font-size:30px;
    color:white;
    float:right;
    line-height:80px;
    margin-right:40px;
    cursor:pointer;
    display:none;

}

#check{
    display:none;
}

@media(max-width:952px){
    label.logo{
        font-size:30px;
        padding-left:50px;
    }
    nav ul li a{
        font-size:16px;
    }
}
@media(max-width:858px){
    .checkbtn{
       display:block;
       color:var(--logoTestcolor)
    }
    ul{
        position:fixed;
        width:100%;
        height:100vh;
        // background:#2c3e50;
         background-image: linear-gradient(180deg, #fff 6.96%,  #1596d4 90.95%);  
        left:-103%;
        text-aligh:center;
        transition:all .5s;
      

    }

// ......this is code by me
    nav ul li{
        display:block;
        line-height:90px;
        text-aligh:center;
        padding:0px 19px;
    }

    nav ul li:hover{
        background-image: linear-gradient(45deg, #ffcf2a 6.96%, #f26322 90.95%);
        border-radius:13px;
    }
    nav ul li a{
        background:none;
        font-size:30px;
    }

    a:hover,a:active{
        background:none;
       color:2c3e50;
    }

    #check:checked ~ ul{
        left:0;
    }
    section{

    }
`}</style>
    </>
  )
}

export default NewNav
