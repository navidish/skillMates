import { services } from './homeData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../serviceSlider.css';
import { Navigation } from 'swiper/modules';
const Services = () => {
  const { title, icon } = services;
  return (
    <section className="section">
      <div
        className="section-title-group max-x-[540px] mx-auto px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img src={icon} />
        <h2 className="h2 section-title">
          {title}
          <span className="text-primary-400">.</span>
        </h2>
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <ServiceSlider />
      </div>
    </section>
  );
};

export default Services;

export const ServiceSlider = () => {
  const { programs } = services;
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={16}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className="serviceSlider"
    >
      {programs.map((program, index) => {
        const { image, name } = program;
        return (
          <SwiperSlide
            className="max-w-[320px] max-h-[320px] relative"
            key={index}
          >
            <img
              className="w-[328px] h-[328px] object-cover"
              src={image}
              alt=""
            />
            <div className="absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center rounded-[1px]">
              <div className="font-semibold text-sm text-neutral-900">
                {name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
