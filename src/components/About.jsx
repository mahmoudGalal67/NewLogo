"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const items = section.querySelectorAll(".item");

    gsap.fromTo(
      items,
      {
        y: 200, // start lower
        x: (i, el) =>
          window.innerWidth / 2 -
          el.getBoundingClientRect().left -
          el.offsetWidth / 2, // center of screen
        autoAlpha: 0,
      },
      {
        y: 0,
        x: 0,
        autoAlpha: 1,
        duration: 2,
        ease: "power3.out",
        stagger: {
          each: 0.2,
        },
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // start when section is near viewport bottom
          end: "bottom 60%", // optional, when to consider it "done"
          toggleActions: "play reset play reset",
        },
      }
    );
  }, []);

  return (
    <section
      id="About-us"
      ref={sectionRef}
      className="about-us mt-36 lg:px-28 px-5"
      dir=""
    >
      <div className="wrapper flex  justify-between flex-wrap md:gap-8 gap-3">
        <div className="item info-item flex flex-col items-start justify-center gap-1 lg:p-[28px] p-[16px] lg:py-[72px] py-[48px] rounded-[48px] lg:w-[64%] w-full">
          <h3 className="text-[42px] font-bold md:mr-16 mr-0 mb-5">من نحن </h3>
          <p className="text-[28px text-right md:w-[45%]">
            شركة سعودية رائدة في تصميم العلامات التجارية لنجعل من هويات وشعارات
            الشركات والمنتجات السعودية قوة حضور بصري تنافس قوة الشعارات العالمية
            حول العالم
          </p>
        </div>
        <div className="item flex flex-col items-center justify-center gap-1 lg:p-[28px] p-[16px] lg:py-[72px] py-[48px] rounded-[48px] lg:w-[28%] w-[42%]">
          <h3 className="lg:text-[68px] text-[36px] font-bold text-white">
            180+
          </h3>
          <span className="text-[28px text-white">مشروع ناجح</span>
        </div>
        <div className="item flex flex-col items-center justify-center gap-1 lg:p-[28px] p-[16px] lg:py-[72px] py-[48px] rounded-[48px] lg:w-[28%] w-[42%]">
          <h3 className="lg:text-[68px] text-[36px] font-bold text-white">
            500+
          </h3>
          <span className="text-[28px text-white">عميل سعيد </span>
        </div>
        <div className="item flex flex-col items-center justify-center gap-1 lg:p-[28px] p-[16px] lg:py-[72px] py-[48px] rounded-[48px] lg:w-[28%] w-[42%]">
          <h3 className="lg:text-[68px] text-[36px] font-bold text-white">
            30+
          </h3>
          <span className="text-[28px text-white">سنة خبرة </span>
        </div>
        <div className="item flex flex-col items-center justify-center gap-1 lg:p-[28px] p-[16px] lg:py-[72px] py-[48px] rounded-[48px] lg:w-[28%] w-[42%]">
          <h3 className="lg:text-[68px] text-[36px] font-bold text-white">
            20+
          </h3>
          <span className="text-[28px text-white">شريك استراتيجي </span>
        </div>
      </div>
    </section>
  );
}

export default About;
