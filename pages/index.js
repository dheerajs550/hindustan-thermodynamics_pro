import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HotProducts from './components/HotProducts';
import FeaturedProducts from './components/FeaturedProducts';
import AboutWork from './components/AboutWork';
import WhyHTBox from './WhyHTBox';
import Customers from './components/Customers';
import Testimonials from './components/Testimonials';
import Carouselpoto from './components/Carouselpoto';


export default function Home() {
  return (
    <>
    <div className='container_home  hero_linear-gradient1 pb-5'style={{zIndex:"5"}}>
    <Carouselpoto/>
    {/* <div className='CarouselPotoBox    '>
    </div> */}
    
    
    </div>
    {/* ............second section.... */}
    <h1 className=' text-center m-5'>WELCOME TO OUR WEBSITE</h1>
<AboutWork/>
    {/* .......... */}
    <WhyHTBox/>
<HotProducts/>
<Customers/>
<Testimonials/>
<FeaturedProducts/>
    <style jsx>{`
.container_home {
  // background-image: linear-gradient(180deg, #2874b9 6.96%, #fff 90.95%);

  background:#333;
  // box-shadow:var(--boxShadow);
  height: 100vh;
  width: 100%;
 
}
  
.CarouselPotoBox{
    height: 100vh;
    // justify-content:space-between;
    // align-items:center;
    // font-size:1.2rem;
    // padding:0 30px;
    width:100%;
    // top: 0px;
    // left:0%;
    // transform:translate(3%, 21% );
  
  
}

`}</style>
    </>
  )
}

// <div className='m-5 '>
//     <div className="card mb-3 m-auto" style={{maxWidth: "740px"}}>
//   <div className="row no-gutters">
//     <div className="col-md-4">
//       <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="..." style={{width:"100%"}}/>
//     </div>
//     <div className="col-md-8">
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//       </div>
//     </div>
//   </div>
// </div>
// </div>