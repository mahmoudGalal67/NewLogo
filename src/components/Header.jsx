"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const images = gsap.utils.toArray(".header-image");
    const total = images.length;
    if (!wrapper || total === 0) return;

    // Hide all images except the first
    gsap.set(images, { autoAlpha: 0, y: "-20%" });
    gsap.set(images[0], { autoAlpha: 1, y: "0%" });

    // Timeline mapped to pinned scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        start: "top 7%", // starts when .home hits 20% from top
        end: "+=100%",
        scrub: true,
        pin: wrapper,
      },
    });

    // Animate each image: fade + move + scale
    for (let i = 0; i < total - 1; i++) {
      // Animate current image out
      tl.to(images[i], { autoAlpha: 0, y: "-20%", duration: 1 }, i);
      // Animate next image in
      tl.fromTo(
        images[i + 1],
        { autoAlpha: 0, y: "-20%" },
        { autoAlpha: 1, y: "0%", duration: 1 },
        i
      );
    }

    // cleanup on unmount
    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <main className="mt-[90px]" dir="ltr">
      <div
        ref={wrapperRef}
        className="wrapper relative overflow-hidden" // 100vh
      >
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

        <div className="info flex-around absolute bottom-[80px] p-2 gap-8 w-full z-20 pointer-events-none">
          <h2 className="text-[48px] text-white font-[600]">Project Name</h2>
          <p className="text-[18px] text-white">
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            <br />
            aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
            <br />
            viverra maecenas accumsan lacus vel facilisis.
          </p>
        </div>
      </div>
    </main>
  );
}
