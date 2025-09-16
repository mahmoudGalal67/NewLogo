"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const wrapperRef = useRef(null);
  const info = [
    {
      title: "Project Name 1",
      para: [
        " elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
        "aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo",
        " viverra maecenas accumsan lacus vel facilisis.",
      ],
    },
    {
      title: "Project Name 2",
      para: [
        " elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
        "aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo",
        " viverra maecenas accumsan lacus vel facilisis.",
      ],
    },
    {
      title: "Project Name 3",
      para: [
        " elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
        "aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo",
        " viverra maecenas accumsan lacus vel facilisis.",
      ],
    },
    {
      title: "Project Name 4",
      para: [
        " elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
        "aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo",
        " viverra maecenas accumsan lacus vel facilisis.",
      ],
    },
  ];
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const images = gsap.utils.toArray(".header-image");
    const infoItems = gsap.utils.toArray(".info");

    const total = images.length;
    if (!wrapper || total === 0) return;

    // Hide all images except the first
    gsap.set(images, { autoAlpha: 0, y: "-20%" });
    gsap.set(images[0], { autoAlpha: 1, y: "0%" });
    // Hide all Info except the first
    gsap.set(infoItems, { autoAlpha: 0, y: "-80%" });
    gsap.set(infoItems[0], { autoAlpha: 1, y: "0%" });

    // Timeline mapped to pinned scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        start: "top 4%",
        end: "+=100%",
        scrub: true,
        pin: wrapper,
      },
    });

    // Animate each image in/out
    for (let i = 0; i < total - 1; i++) {
      tl.to(images[i], { autoAlpha: 0, y: "-20%", duration: 1 }, i);
      tl.to(infoItems[i], { autoAlpha: 0, y: "-80%", duration: 1 }, i);
      tl.fromTo(
        images[i + 1],
        { autoAlpha: 0, y: "-20%" },
        { autoAlpha: 1, y: "0%", duration: 1 },
        i
      );
      tl.fromTo(
        infoItems[i + 1],
        { autoAlpha: 0, y: "-80%" },
        { autoAlpha: 1, y: "0%", duration: 1 },
        i
      );
    }

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <main className="home mt-[70px]" dir="ltr">
      <div ref={wrapperRef} className="wrapper relative overflow-hidden">
        {/* Background images */}
        <img
          src="/main1.jpg"
          className="header-image absolute inset-0 w-full h-full object-cover rounded-[64px]"
          alt=""
        />
        <img
          src="/main2.jpeg"
          className="header-image absolute inset-0 w-full h-full object-cover rounded-[64px]"
          alt=""
        />
        <img
          src="/main3.jpeg"
          className="header-image absolute inset-0 w-full h-full object-cover rounded-[64px]"
          alt=""
        />
        <img
          src="/main4.jpeg"
          className="header-image absolute inset-0 w-full h-full object-cover rounded-[64px]"
          alt=""
        />

        {/* Info Section */}
        {info.map((item, i) => (
          <div
            key={i}
            className="info flex-around lg:flex-row flex-col absolute bottom-[80px] p-2 gap-8 w-full z-20 pointer-events-none text-white"
          >
            <h2 className="lg:text-[48px] text-[32px] font-[600] overflow-hidden">
              <span className="line-heading inline-block">{item.title}</span>
            </h2>
            <p className="lg:text-[18px] text-[16px] lg:text-start text-center">
              {item?.para?.map((p, i) => (
                <span key={i} className="block overflow-hidden">
                  <span className="line-para inline-block">{p}</span>
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
