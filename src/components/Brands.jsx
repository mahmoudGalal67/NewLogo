// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { title } from "framer-motion/client";

const brands1 = [
  { img: "logo01.png", title: "" },
  { img: "logo02.png", title: "" },
  { img: "logo03.png", title: "" },
  { img: "logo04.png", title: "" },
  { img: "logo05.png", title: "" },
  { img: "logo06.png", title: "" },
  { img: "logo07.png", title: "" },
  { img: "logo08.png", title: "" },
  { img: "logo09.png", title: "" },
  { img: "logo010.png", title: "" },
];
const brands2 = [
  { img: "logo011.png", title: "" },
  { img: "logo012.png", title: "" },
  { img: "logo013.png", title: "" },
  { img: "logo014.png", title: "" },
  { img: "logo015.png", title: "" },
  { img: "logo016.png", title: "" },
  { img: "logo017.png", title: "" },
  { img: "logo018.png", title: "" },
  { img: "logo019.png", title: "" },
  { img: "logo020.png", title: "" },
];
const brands3 = [
  { img: "logo021.png", title: "" },
  { img: "logo022.png", title: "" },
  { img: "logo023.png", title: "" },
  { img: "logo024.png", title: "" },
  { img: "logo025.png", title: "" },
  { img: "logo026.png", title: "" },
  { img: "logo027.png", title: "" },
  { img: "logo028.png", title: "" },
  { img: "logo029.png", title: "" },
  { img: "logo030.png", title: "" },
];
const brands4 = [
  { img: "logo031.png", title: "" },
  { img: "logo032.png", title: "" },
  { img: "logo033.png", title: "" },
  { img: "logo034.png", title: "" },
  { img: "logo035.png", title: "" },
  { img: "logo036.png", title: "" },
  { img: "logo037.png", title: "" },
  { img: "logo038.png", title: "" },
  { img: "logo039.png", title: "" },
  { img: "logo040.png", title: "" },
];
const brands5 = [
  { img: "logo041.png", title: "" },
  { img: "logo042.png", title: "" },
  { img: "logo043.png", title: "" },
  { img: "logo044.png", title: "" },
  { img: "logo045.png", title: "" },
  { img: "logo046.png", title: "" },
];

function Brands() {
  return (
    <div id="Projects">
      <div className="wrapper p-[4%]">
        <h3 className="mb-8 mt-5 text-4xl font-bold md:text-start text-center">
          مشاريعنا
        </h3>
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
              <img src={`/works/${item.img}`} alt="" />
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
          {brands2.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={`/works/${item.img}`} alt="" />
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
          {brands3.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={`/works/${item.img}`} alt="" />
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
          {brands4.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={`/works/${item.img}`} alt="" />
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
          {brands5.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={`/works/${item.img}`} alt="" />
            </SwiperSlide>
          ))}
          {brands5.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={`/works/${item.img}`} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Brands;
