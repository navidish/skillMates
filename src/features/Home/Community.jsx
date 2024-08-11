import { community } from './homeData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Community = () => {
  const { icon, title, testimonials } = community;
  return (
    <section className="section relative">
      <div className="container flex">
       <div className='flex max-w-[400px]'>
       <div
            className="section-title-group max-w-[400px] px-4 lg:px-0 lg:ml-0 mx-auto "
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <img src={icon} alt="" />
            <h2 className="h2 section-title">
              {title}
              <span className="text-primary-400">.</span>
            </h2>
          </div>
          <div
            className="absolute  right-[500px] lg:right-[500px]  top-48 lg:top-0  w-[1140px]"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="300"
          >
            <CommunitySlider testimonials={testimonials} />
          
       
        </div>
       </div>
      </div>
    </section>
  );
};

export default Community;
export const CommunitySlider = ({ testimonials }) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={16}
      centeredSlides={'auto'}
      grabCursor={true}
      modules={[]}
    >
      {testimonials.map((testimonials, index) => {
        const { image, name, message } = testimonials;
        return (
          <SwiperSlide
            className="max-w-[320px] max-h-[320px] relative"
            key={index}
          >
            <div className="relative">
              <div>
                <img
                  className="w-[328px] h-[328px] object-cover bg-gradient-to-t	rounded-[8px]"
                  src={image}
                  alt=""
                />
              </div>
              <div className="absolute bottom-[30px]   text-white p-[20px] text-center">
                <div className="mb-8 italic text-lg font-light">{message}</div>
                <div className="flex items-center justify-center gap-x-[3px]">
                  <span className="text-[30px] text-primary-400 font-bold">
                    ~
                  </span>
                  <div className="text-[20px] font-bold">{name}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
