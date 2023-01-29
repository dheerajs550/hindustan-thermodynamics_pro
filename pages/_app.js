import '../styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Navebar from './components/Navebar';
function MyApp({ Component, pageProps }) {
  return<>
  <Navebar/>
 <div className='mt-3'>

  <Component {...pageProps} />
 </div>
  <Footer/>
  </>
}

export default MyApp
