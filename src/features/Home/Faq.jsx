import { useState } from 'react';
import { faq } from './homeData';
import { FaChevronCircleUp,FaChevronCircleDown } from 'react-icons/fa';
const Faq = () => {
  const {icon,title,accordions} = faq;
  return (
    <section className='section pt-[480px] lg:pt-[280px]'>
      <div className='max-w-[768px] mx-auto lg:bg-faq bg-cover bg-no-repeat lg:h-[768px] lg:pt-6'>
        <div className='section-title-group justify-start lg:justify-center space-x-4 
        lg:max-w-[540px] mx-auto px-4 lg:px-0 '
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
        >
            <img src={icon} className='lg:hidden'/>
            <h2 className='h2 section-title lg:mt-[100px]'>
              {title}<span className='text-primary-400'>.</span>
            </h2>
          </div>
          <div 
              className='flex flex-col gap-y-4 px-4'      
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-delay="200">
              {accordions.map((acc,index)=><Accordion key={index} accordion={acc}/>)}
        </div>
      </div>
        
  </section>
  );
};

export default Faq;

const Accordion = ({accordion})=>{
  const [isOpen,setIsOpen]=useState(false);
  const {question,answer} = accordion;
    return(
      <div onClick={()=>setIsOpen((!isOpen))} className='cursor-pointer'>
        <div className='bg-white border rounded-[8px]'>
          <div className='min-h-[60px] flex items-center justify-between px-[30px] '>
            <h6 className='h6'>{question}</h6>
            <div>
              {isOpen?<FaChevronCircleUp className='text-[20px] text-secondary-800'/>:<FaChevronCircleDown className='text-[20px] text-secondary-800'/>}
            </div>


          </div>
          <div className={`${isOpen?'min-h-[200px] lg:min-h-[160px]':'min-h-0'} max-h-0 overflow-hidden flex justify-center transition-all px-[30px]` }>
            <div className='mt-6'>
              {answer}
            </div>
          </div>
          </div>
      </div>
    )

 }