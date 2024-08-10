import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import Banner from './Banner';
import About from './About';
import Community from './Community';
import Faq from './Faq';
import Footer from './Footer';
import Services from './Services';
import Join from './Join';

const Main = () => {
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Community />
      <Join/>
      <Faq />
      <Footer />
    </>
  );
};
export default Main;
