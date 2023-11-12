import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Category = () => {
  return (
    <>
      <SectionTitle
        mainText={"ORDER ONLINE"}
        subText={"From 11:00am to 10:00pm"}
      ></SectionTitle>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="/src/assets/category/1.jpg"
              className="h-[150px] md:h-[450px]  w-full object-cover object-bottom"
            />
            <h1 className="font-Cinzel text-sm md:text-4xl py-1 bg-black bg-opacity-60 text-white absolute w-full text-center bottom-0 mb-4">
              Salad
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="/src/assets/category/2.jpg"
              className="h-[150px] md:h-[450px]  w-full object-cover object-center"
            />
            <h1 className="font-Cinzel text-sm md:text-4xl py-1 bg-black bg-opacity-60 text-white absolute w-full text-center bottom-0 mb-4">
              Soup
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="/src/assets/category/3.jpg"
              className="h-[150px] md:h-[450px]  w-full object-cover object-bottom"
            />
            <h1 className="font-Cinzel text-sm md:text-4xl py-1 bg-black bg-opacity-60 text-white absolute w-full text-center bottom-0 mb-4">
              Pizza
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="/src/assets/category/4.jpg"
              className="h-[150px] md:h-[450px]  w-full object-cover object-bottom"
            />
            <h1 className="font-Cinzel text-sm md:text-4xl py-1 bg-black bg-opacity-60 text-white absolute w-full text-center bottom-0 mb-4">
              Dessert
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="/src/assets/category/5.jpg"
              className="h-[150px] md:h-[450px]  w-full object-cover object-center"
            />
            <h1 className="font-Cinzel text-sm md:text-4xl py-1 bg-black bg-opacity-60 text-white absolute w-full text-center bottom-0 mb-4">
              Pasta
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="/src/assets/category/6.jpg"
              className="h-[150px] md:h-[450px]  w-full object-cover object-bottom"
            />
            <h1 className="font-Cinzel text-sm md:text-4xl py-1 bg-black bg-opacity-60 text-white absolute w-full text-center bottom-0 mb-4">
              Sandwich
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
