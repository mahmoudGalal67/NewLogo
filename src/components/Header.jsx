"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Header() {
  const wrapperRef = useRef(null);
  const imagesRef = useRef([]);
  const infoRef = useRef([]);
  const currentRef = useRef(0); // latest index
  const animatingRef = useRef(false);
  const interactingRef = useRef(false);
  const autoplayRef = useRef(null);
  const restartTimerRef = useRef(null);

  const [current, setCurrent] = useState(0);

  // timings
  const AUTOPLAY_DELAY = 3000; // 3s between slides
  const RESTART_DELAY = 1500; // restart autoplay after user interaction
  const DRAG_THRESHOLD = 80; // px required to trigger slide
  const ANIMATION_DURATION = 1; // 1 second GSAP animation

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

  // Initialize refs and GSAP states
  useEffect(() => {
    const images = gsap.utils.toArray(".header-image");
    const infoItems = gsap.utils.toArray(".info");

    imagesRef.current = images;
    infoRef.current = infoItems;

    // initial states
    gsap.set(images, { autoAlpha: 0, x: "20%" });
    if (images[0]) gsap.set(images[0], { autoAlpha: 1, x: "0%" });

    gsap.set(infoItems, { autoAlpha: 0, x: "40%" });
    if (infoItems[0]) gsap.set(infoItems[0], { autoAlpha: 1, x: "0%" });

    startAutoplay();

    return () => {
      stopAutoplay();
      clearTimeout(restartTimerRef.current);
    };
  }, []);

  // Core animation
  const animateSlide = (nextIndex, direction) => {
    const images = imagesRef.current;
    const infoItems = infoRef.current;
    if (
      !images.length ||
      animatingRef.current ||
      nextIndex === currentRef.current
    )
      return;

    const curr = currentRef.current;
    animatingRef.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        currentRef.current = nextIndex;
        setCurrent(nextIndex);
        animatingRef.current = false;
      },
    });

    tl.to(
      images[curr],
      {
        autoAlpha: 0,
        x: -20 * direction + "%",
        duration: ANIMATION_DURATION,
        ease: "power2.inOut",
      },
      0
    );
    tl.to(
      infoItems[curr],
      {
        autoAlpha: 0,
        x: -40 * direction + "%",
        duration: ANIMATION_DURATION,
        ease: "power2.inOut",
      },
      0
    );

    tl.fromTo(
      images[nextIndex],
      { autoAlpha: 0, x: 20 * direction + "%" },
      {
        autoAlpha: 1,
        x: "0%",
        duration: ANIMATION_DURATION,
        ease: "power2.inOut",
      },
      0
    );
    tl.fromTo(
      infoItems[nextIndex],
      { autoAlpha: 0, x: 40 * direction + "%" },
      {
        autoAlpha: 1,
        x: "0%",
        duration: ANIMATION_DURATION,
        ease: "power2.inOut",
      },
      0
    );
  };

  const showNext = () => {
    const len = imagesRef.current.length || 1;
    const next = (currentRef.current + 1) % len;
    animateSlide(next, 1);
  };

  const showPrev = () => {
    const len = imagesRef.current.length || 1;
    const prev = (currentRef.current - 1 + len) % len;
    animateSlide(prev, -1);
  };

  // Autoplay control
  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      if (!animatingRef.current && !interactingRef.current) {
        showNext();
      }
    }, AUTOPLAY_DELAY);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  // Mouse drag (left click only)
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let startX = 0;
    let pointerId = null;

    const onPointerDown = (e) => {
      if (!e.isPrimary) return;
      interactingRef.current = true;
      startX = e.clientX;
      pointerId = e.pointerId;
      stopAutoplay();
      try {
        wrapper.setPointerCapture(pointerId);
      } catch {}
      e.preventDefault();
    };

    const onPointerUp = (e) => {
      if (!interactingRef.current) return;
      const diff = e.clientX - startX;
      if (diff > DRAG_THRESHOLD) {
        showNext();
      } else if (diff < -DRAG_THRESHOLD) {
        showPrev();
      }
      interactingRef.current = false;
      try {
        wrapper.releasePointerCapture(pointerId);
      } catch {}
      clearTimeout(restartTimerRef.current);
      restartTimerRef.current = setTimeout(
        () => startAutoplay(),
        RESTART_DELAY
      );
    };

    const onPointerCancel = () => {
      interactingRef.current = false;
      clearTimeout(restartTimerRef.current);
      restartTimerRef.current = setTimeout(
        () => startAutoplay(),
        RESTART_DELAY
      );
    };

    wrapper.addEventListener("pointerdown", onPointerDown, { passive: false });
    wrapper.addEventListener("pointerup", onPointerUp);
    wrapper.addEventListener("pointercancel", onPointerCancel);
    wrapper.addEventListener("pointerleave", onPointerCancel);

    return () => {
      wrapper.removeEventListener("pointerdown", onPointerDown);
      wrapper.removeEventListener("pointerup", onPointerUp);
      wrapper.removeEventListener("pointercancel", onPointerCancel);
      wrapper.removeEventListener("pointerleave", onPointerCancel);
    };
  }, []);

  return (
    <main className="home mt-[70px]" dir="ltr">
      <div
        ref={wrapperRef}
        className="wrapper relative overflow-hidden select-none"
      >
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
              {item.para.map((p, j) => (
                <span key={j} className="block overflow-hidden">
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
