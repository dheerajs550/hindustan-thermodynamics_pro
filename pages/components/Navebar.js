import Link from 'next/link'
import React from 'react'

const Navebar = () => {
  return (
   <>
   <div className='container_home d-flex justify-content-between  navBarShadow' style={{zIndex:"9"}}>
   <Link className="navbar-logo" href="#">
    <div className=' rounded-circle m-3' style={{ height:"7vh"}}>
      <img src="logo1.jpeg" alt="logo" style={{width:"100%", height:"100%"}}/>
    </div>
   </Link>
   <div className="d-flex">
      <div className="nav_item_box box_active rounded-pill">
        <Link className="Links" style={{color:" var(--nevTexcolor)"}} href="#">Home <span className="sr-only">(current)</span></Link>
      </div>
      <div className="nav_item_box pt-2 pl-4 pr-4 rounded-pill  ">
        <Link className="Links" style={{color:" var(--nevTexcolor)"}} href="/about">About</Link>
      </div>
      <div className="nav_item_box pt-2 pl-4 pr-4 rounded-pill">
        <Link className="Links " style={{color:" var(--nevTexcolor)"}} href="/products">Products</Link>
      </div>
      <div className="nav_item_box pt-2 pl-4 pr-4 rounded-pill">
      <Link className="Links" style={{color:" var(--nevTexcolor)"}} href="/contact">Contact Us</Link>
    </div>
    </div>
   </div>
   <style jsx>{`
.container_home {
  background:#FFF;
  box-shadow:var(--navebarshodo);
  height: 10vh;
  position: fixed;
  top: 0;
  width: 100%;
  diplay:flex;
}
.nav_item_box{
  margin:15px
}
.box_active{
  background:var(--blue);
  padding: 10px 26px;
  border: 1px solid var(--blue);
}

.navbar-logo{
  margin:15px
}
.logo{
  padding: 10px 26px;
  background:var(--blue);
  color:var(--gray);
}
`}</style>
   </>
  )
}

export default Navebar
{/* <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <Link className="navbar-brand" href="/home">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
  <form className="form-inline mr-auto my-2 my-lg-0">
</form>
    <ul className="navbar-nav  mt-2 mt-lg-0">
      <li className="nav_item_box active">
        <Link className="Link" href="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav_item_box">
        <Link className="Link" href="/about">About</Link>
      </li>
      <li className="nav_item_box">
        <Link className="Link " href="/products">Products</Link>
      </li>
      <li className="nav_item_box">
      <Link className="Link "  href="/contact">Contact Us</Link>
    </li>
    </ul>
  </div>
</nav> */}