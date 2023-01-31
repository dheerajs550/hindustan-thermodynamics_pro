import React from 'react'
import { FiAlignJustify } from 'react-icons/fi';

const NewNav = () => {
  return (
    <>
      <nav>
        <input type='checkbox' id={'check'}/>
        <label for='check' className='checkbtn'>
            <FiAlignJustify/>
        </label>

        <label className='logo' >DesignX</label>
        <ul>
            <li><a className='active' href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>Contact</a></li>
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
    background:#0082e6;
    height:80px;
    width:100%;
}

label.logo{
    color:white;
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

    }
    ul{
        position:fixed;
        width:100%;
        height:100vh;
        background:#2c3e50;
  background-image: linear-gradient(180deg, #fff 6.96%,  #1596d4 90.95%);  height: 70vh;

        top:80px;
        left:-100%;
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
