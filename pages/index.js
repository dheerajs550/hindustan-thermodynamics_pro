import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AutoPlay from './components/CarouselPoto';
import HotProducts from './components/HotProducts';
import FeaturedProducts from './components/FeaturedProducts';
import AboutWork from './components/AboutWork';
import WhyHTBox from './WhyHTBox';
import Customers from './components/Customers';
import Testimonials from './components/Testimonials';


export default function Home() {
  return (
    <>
    <div className='container_home mt-5 hero_linear-gradient1 pb-5'style={{zIndex:"5"}}>
    <div className='CarouselPotoBox mt-5 pt-5 m-auto '>
    <AutoPlay/>
    </div>
    <h1 className=' text-center'>WELCOME TO OUR WEBSITE</h1>
    {/* ............ */}
    <div className='m-5 '>
    <div className="card mb-3 m-auto" style={{maxWidth: "740px"}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="..." style={{width:"100%"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
    {/* ............second section.... */}
<AboutWork/>
    {/* .......... */}
    <WhyHTBox/>
<HotProducts/>
<Customers/>
<Testimonials/>
<FeaturedProducts/>
    <style jsx>{`
.container_home {
  // background:var(--purple);
  // box-shadow:var(--boxShadow);
  height: 100%;
  width: 100%;
  top:15%;
}
  
.CarouselPotoBox{
  // background:var(--yellow);
  // box-shadow:var(--boxShadow);
  height: 70vh;
  width: 99%;
}

`}</style>
    </>
  )
}
