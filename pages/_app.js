import '../styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
// import Navebar from './components/Navebar';
import WhatsApp from './components/WhatsApp';
import NewNav from './components/NewNav';


function MyApp({ Component, pageProps }) {
  return<>
  {/* <Navebar/> */}
  <NewNav/>
 <div className=''>

  <Component {...pageProps} />
 </div>
 <WhatsApp/>
  <Footer/>
  </>
}

export default MyApp
