// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { title } from "framer-motion/client";

const brands1 = [
  { img: "brands1.jpg", title: "" },
  { img: "brands2.jpg", title: "" },
  { img: "brands3.jpg", title: "" },
  { img: "brands4.jpg", title: "" },
  { img: "brands5.jpg", title: "" },
  { img: "brands6.jpg", title: "" },
  { img: "brands7.jpg", title: "" },
  { img: "brands1.jpg", title: "" },
  { img: "brands2.jpg", title: "" },
  { img: "brands3.jpg", title: "" },
];

function Brands() {
  return (
    <div id="Brands">
      <div className="wrapper p-[4%]">
        <h3 className="mb-5 text-3xl">Brand</h3>
        <Swiper
          spaceBetween={50}
          slidesPerView={8}
          className="mb-5"
          loop={true} // infinite loop
          dir="rtl" // make direction right-to-left
          autoplay={{
            delay: 0, // no delay between transitions
            disableOnInteraction: false,
          }}
          speed={3000} // slide speed (ms)
          modules={[Autoplay]}
        >
          {brands1.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={`/public/brands/${item.img}`} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          spaceBetween={50}
          slidesPerView={8}
          className="mb-5"
          loop={true} // infinite loop
          dir="ltr" // make direction right-to-left
          autoplay={{
            delay: 0, // no delay between transitions
            disableOnInteraction: false,
          }}
          speed={3000} // slide speed (ms)
          modules={[Autoplay]}
        >
          {brands1.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={`/public/brands/${item.img}`} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          spaceBetween={50}
          slidesPerView={8}
          className="mb-5"
          loop={true} // infinite loop
          dir="rtl" // make direction right-to-left
          autoplay={{
            delay: 0, // no delay between transitions
            disableOnInteraction: false,
          }}
          speed={3000} // slide speed (ms)
          modules={[Autoplay]}
        >
          {brands1.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={`/public/brands/${item.img}`} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          spaceBetween={50}
          slidesPerView={8}
          className="mb-5"
          loop={true} // infinite loop
          dir="ltr" // make direction right-to-left
          autoplay={{
            delay: 0, // no delay between transitions
            disableOnInteraction: false,
          }}
          speed={3000} // slide speed (ms)
          modules={[Autoplay]}
        >
          {brands1.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={`/public/brands/${item.img}`} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Brands;
