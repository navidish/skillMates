import { join } from "./homeData";

const Join = () => {
    const {image,title,subtitle,btnText}= join;
    return (
        <section className="min-h-[537px] bg-slate-900 mt-[168px]">
            <div className="container mx-auto">
                <div className="flex flex-col gap-x-10 md:flex-row  -space-x-12
                                md:items-center md:-space-x-12 -space-y-24 lg:-space-y-0" >
                    <div className="-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-full" 
                    data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-delay="200">
                            <img src={image} alt="" className="max-h-[580px]"/>
                    </div>
                    
                    <div className="max-w-[450px]   mr-[230px]"  
                        data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-delay="200">

                        <h1 className="h1 md:text-[60px] md:leading-[64px] mb-4 lg:mb-6 text-white "> کار باکیفیت <span className="text-primary-400">و</span> متنوع </h1>
                        <p className="text-body-sm text-white">{subtitle}</p>
                        <button className="btn btn-secondary btn-lg mt-4">{btnText}</button>
                
                    </div>
                    

                </div>
            </div>
        </section>
    );
  };
  
  export default Join;
