import { banner } from './homeData';

const Banner = () => {
  const { titlePart1, titlePart2, subtitle, textBtn } = banner;
  return (
    <section className="bg-secondary-800 h-[680px] rounded-b-[8px]">
      <div className="container mx-auto h-full">
        <div className=" flex h-full items-center relative space-x-48 lg:space-x-24">
          <div className=" text-white flex-1 items-start z-10  pr-6 lg:pr-0  ">
            <h1
              className="h1 text-white mb-8 text-right"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {titlePart1}
              <br />
              <span className="text-primary-400 ">{titlePart2}</span>
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="600"
              className=" text-right max-w-[415px] text-body-md lg:text-body-lg mb-8"
            >
              {subtitle}
            </p>
            <button
              data-aos="fade-down"
              data-aos-delay="700"
              className="button button-sm lg:button-lg button-secondary"
            >
              {textBtn}
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="900"
            className="bg-blue-300 w-full h-full bg-banner bg-cover bg-left lg:bg-center bg-no-repeat flex-1"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
