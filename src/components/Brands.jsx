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
        <h3 className="mb-8 mt-[5] text-4xl font-bold">Brand</h3>
        <Swiper
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 10 }, // mobile
            640: { slidesPerView: 4, spaceBetween: 20 }, // tablets
            1024: { slidesPerView: 6, spaceBetween: 30 }, // small desktops
            1440: { slidesPerView: 8, spaceBetween: 30 }, // large screens
          }}
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
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 10 }, // mobile
            640: { slidesPerView: 4, spaceBetween: 20 }, // tablets
            1024: { slidesPerView: 6, spaceBetween: 30 }, // small desktops
            1440: { slidesPerView: 8, spaceBetween: 30 }, // large screens
          }}
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
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 10 }, // mobile
            640: { slidesPerView: 4, spaceBetween: 20 }, // tablets
            1024: { slidesPerView: 6, spaceBetween: 30 }, // small desktops
            1440: { slidesPerView: 8, spaceBetween: 30 }, // large screens
          }}
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
              <img src={`/brands/${item.img}`} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 10 }, // mobile
            640: { slidesPerView: 4, spaceBetween: 20 }, // tablets
            1024: { slidesPerView: 6, spaceBetween: 30 }, // small desktops
            1440: { slidesPerView: 8, spaceBetween: 30 }, // large screens
          }}
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
