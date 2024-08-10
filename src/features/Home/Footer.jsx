import {footer} from './homeData'
const Footer = () => {
  const {logo,copyrightText} = footer;
  return (
    <footer className='bg-secondary-800 h-[125px] md:h-[195px] px-[20px]'>
      <div className='container mx-auto h-full flex justify-between items-center md:items-end md:pb-[50px]'
           data-aos="fade-up"
            data-aos-delay="50">
        <a href='#'>
          <img className="h-[30px]"  src={logo} alt=''/>
        </a>
        <p className='text-secondary-500 text-sm'>{copyrightText}</p>
        
      </div>
  </footer>
  );
};

export default Footer;
