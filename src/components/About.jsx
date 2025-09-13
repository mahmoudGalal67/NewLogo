"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true, // only run once
    threshold: 0.5, // start when 50% visible
  });
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
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none none", // 👈 don't reset
          once: true, // 👈 run only once
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
      <div
        ref={ref}
        className="wrapper flex  justify-between flex-wrap md:gap-8 gap-3"
      >
        <div className="item info-item flex flex-col items-start justify-center gap-1 lg:p-[28px] p-[16px] lg:py-[72px] py-[48px] rounded-[48px] lg:w-[64%] w-full">
          <h3 className="text-[42px] font-bold md:mr-16 mr-0 mb-5">من نحن </h3>
          <p className="text-[28px text-right md:w-[65%]">
            شركة سعودية رائدة في تصميم العلامات التجارية لنجعل من هويات وشعارات
            الشركات والمنتجات السعودية قوة حضور بصري تنافس قوة الشعارات العالمية
            حول العالم
          </p>
        </div>
        <div className="item flex flex-col items-center justify-center gap-1 lg:p-[28px] p-[16px] lg:py-[72px] py-[48px] rounded-[48px] lg:w-[28%] w-[42%]">
          {inView && (
            <CountUp start={0} end={180} duration={1.75} suffix=" +">
              {({ countUpRef }) => (
                <h3
                  className="lg:text-[68px] text-[36px] font-bold text-white"
                  ref={countUpRef}
                ></h3>
              )}
            </CountUp>
          )}
          <span className="text-[28px text-white">مشروع ناجح</span>
        </div>
        <div className="item flex flex-col items-center justify-center gap-1 lg:p-[28px] p-[16px] lg:py-[72px] py-[48px] rounded-[48px] lg:w-[28%] w-[42%]">
          {inView && (
            <CountUp start={0} end={500} duration={1.75} suffix=" +">
              {({ countUpRef }) => (
                <h3
                  className="lg:text-[68px] text-[36px] font-bold text-white"
                  ref={countUpRef}
                ></h3>
              )}
            </CountUp>
          )}
          <span className="text-[28px text-white">عميل سعيد </span>
        </div>
        <div className="item flex flex-col items-center justify-center gap-1 lg:p-[28px] p-[16px] lg:py-[72px] py-[48px] rounded-[48px] lg:w-[28%] w-[42%]">
          {inView && (
            <CountUp start={0} end={30} duration={1.75} suffix=" +">
              {({ countUpRef }) => (
                <h3
                  className="lg:text-[68px] text-[36px] font-bold text-white"
                  ref={countUpRef}
                ></h3>
              )}
            </CountUp>
          )}
          <span className="text-[28px text-white">سنة خبرة </span>
        </div>
        <div className="item flex flex-col items-center justify-center gap-1 lg:p-[28px] p-[16px] lg:py-[72px] py-[48px] rounded-[48px] lg:w-[28%] w-[42%]">
          {inView && (
            <CountUp start={0} end={20} duration={1.75} suffix=" +">
              {({ countUpRef }) => (
                <h3
                  className="lg:text-[68px] text-[36px] font-bold text-white"
                  ref={countUpRef}
                ></h3>
              )}
            </CountUp>
          )}
          <span className="text-[28px text-white">شريك استراتيجي </span>
        </div>
      </div>
    </section>
  );
}

export default About;
