"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const countersRef = useRef([]); // will hold h3 refs

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".item");

    // Entrance animation for boxes (keeps your original timing/ease)
    gsap.fromTo(
      items,
      {
        y: 200,
        x: (i, el) =>
          window.innerWidth / 2 -
          el.getBoundingClientRect().left -
          el.offsetWidth / 2,
        autoAlpha: 0,
      },
      {
        y: 0,
        x: 0,
        autoAlpha: 1,
        duration: 2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          // start a bit earlier so mobile will trigger reliably
          start: "top 85%",
          once: true,
        },
      }
    );

    // Counter targets (same values you used)
    const endValues = [180, 500, 30, 20];

    // Create a ScrollTrigger for each counter element
    countersRef.current.forEach((el, i) => {
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%", // fires when element is near viewport (mobile friendly)
        once: true,
        onEnter: () => {
          // simple guard
          if (el._counted) return;
          el._counted = true;

          const obj = { val: 0 };
          gsap.to(obj, {
            val: endValues[i],
            duration: 1.75,
            ease: "power3.out",
            onUpdate: function () {
              // format same as before: integer + space + plus
              el.innerText = Math.floor(obj.val) + " +";
            },
          });
        },
      });
    });

    // Sometimes images/fonts/layout change after load -> ensure ScrollTrigger refreshes
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);
    // small delayed refresh (helps when fonts/images load a bit later on mobile)
    const t = setTimeout(() => ScrollTrigger.refresh(), 700);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      clearTimeout(t);
      // cleanup ScrollTriggers created in this page
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      id="About-us"
      ref={sectionRef}
      className="about-us mt-36 lg:px-28 px-5"
      dir=""
    >
      <div className="wrapper flex  justify-between flex-wrap md:gap-8 gap-1">
        <div className="item info-item flex flex-col items-start justify-center gap-1 lg:p-[22px] p-[10px] lg:py-[48px] py-[32px] rounded-[48px] lg:w-[64%] w-full">
          <h3 className="text-[42px] font-bold md:mr-16 mr-0 mb-3">من نحن </h3>
          <p className="text-[22px] text-right md:w-[65%]">
            شركة سعودية رائدة في تصميم العلامات التجارية لنجعل من هويات وشعارات
            الشركات والمنتجات السعودية قوة حضور بصري تنافس قوة الشعارات العالمية
            حول العالم
          </p>
        </div>

        {/* Counters - kept your exact markup & classes */}
        <div className="item flex flex-col items-center justify-center gap-1 lg:p-[28px] p-[12px] lg:py-[72px] py-[48px] rounded-[48px] lg:w-[28%] w-[45%]">
          <h3
            className="lg:text-[68px] text-[36px] font-bold text-white"
            ref={(el) => (countersRef.current[0] = el)}
          >
            0 +
          </h3>
          <span className="lg:text-[28px] text-[14px] text-black">
            مشروع ناجح
          </span>
        </div>

        <div className="item flex flex-col items-center justify-center gap-1 lg:p-[28px] p-[12px] lg:py-[72px] py-[48px] rounded-[48px] lg:w-[28%] w-[45%]">
          <h3
            className="lg:text-[68px] text-[36px] font-bold text-white"
            ref={(el) => (countersRef.current[1] = el)}
          >
            0 +
          </h3>
          <span className="lg:text-[28px] text-[14px] text-black">
            عميل سعيد
          </span>
        </div>

        <div className="item flex flex-col items-center justify-center gap-1 lg:p-[28px] p-[12px] lg:py-[72px] py-[48px] rounded-[48px] lg:w-[28%] w-[45%]">
          <h3
            className="lg:text-[68px] text-[36px] font-bold text-white"
            ref={(el) => (countersRef.current[2] = el)}
          >
            0 +
          </h3>
          <span className="lg:text-[28px] text-[14px] text-black">
            سنة خبرة
          </span>
        </div>

        <div className="item flex flex-col items-center justify-center gap-1 lg:p-[28px] p-[12px] lg:py-[72px] py-[48px] rounded-[48px] lg:w-[28%] w-[45%]">
          <h3
            className="lg:text-[68px] text-[36px] font-bold text-white"
            ref={(el) => (countersRef.current[3] = el)}
          >
            0 +
          </h3>
          <span className="lg:text-[28px] text-[14px] text-black">
            شريك استراتيجي
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
