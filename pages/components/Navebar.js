import Link from 'next/link'
import React from 'react'

const Navebar = () => {
  return (
   <>
   <div className='navbarItems d-md-flex' style={{zIndex:"9"}}>
    <div className='col-md-3 logoBox'>
      <img src="logo11.png" alt="logo" style={{width:"100px", height:"100%"}}/>
    </div>
   <div className="mideaclass d-flex justify-content-between align-items-center col-md-6 ml-md-auto">
      <div className="battonhv battonhv_active">
        <Link className="Linkss"  href="/" style={{ textDecoration:"none"}} > home<span className="sr-only">(current)</span></Link>
      </div>
      <div className="battonhv">
        <Link className="Links"  href="/about" style={{ textDecoration:"none"}} >About</Link>
      </div>
      <div className="battonhv">
        <Link className="Links "  href="/products" style={{ textDecoration:"none"}} >Products</Link>
      </div>
      <div className="battonhv">
      <Link className="Links"  href="/contact" style={{ textDecoration:"none"}} >Contact</Link>
    </div>
    </div>
   </div>
   <style jsx>{`
.navbarItems{
  background:#fff;

  justify-content:space-between;
  align-items:center;
  font-size:1.2rem;
  padding:0 30px;
  // background-color:#222;
  // background-image: linear-gradient(180deg, #1596d4 6.96%, #fff 90.95%);
  // background-image: linear-gradient(45deg, #ffcf2a 6.96%, #f26322 90.95%);
  box-shadow:0 5px 15px rgba(0, 0, 0, 0.25);
  width:95%;
  height:80px;
  border-radius:13px;
  position:fixed;
  top: 20px;
  left:50%;
  transform:translate( -50%);
}

.logoBox{
  width:60px;
  height:60px;
}
@media only screen and (max-width: 600px) {
  .logoBox {
    display:none;
  }
  .mideaclass{
    margin-top:2rem
  }
}

.battonhv:hover{
  display:flex;
  justify-content:center;
  align-items:center;
  padding:7PX;
 color:#FFF;
  border-radius:13px;
  background-image: linear-gradient(45deg, #ffcf2a 6.96%, #f26322 90.95%);
}
// .battonhv_active{
//   display:flex;
//   justify-content:center;
//   align-items:center;
//   padding:7PX;
//  color:#FFF;
//   border-radius:13px;
//   background-image: linear-gradient(45deg, #ffcf2a 6.96%, #f26322 90.95%);
// }

`}</style>
   </>
  )
}

export default Navebar
 