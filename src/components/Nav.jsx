import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Links = [
  { title: "الرئيسية", link: "About-us" },
  { title: "خدماتنا", link: "About-us" },
  { title: "من نحن", link: "About-us" },
  { title: "مشاريعنا", link: "About-us" },
];

export default function Nav() {
  const [showmenu, setshowmenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 860 });
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const closeRef = useRef(null);
  const linksRef = useRef([]); // array ref for nav links

  // init states once
  useEffect(() => {
    // ensure array is empty initially
    linksRef.current = [];
    gsap.set(menuRef.current, { y: -30, opacity: 0, pointerEvents: "none" });
    gsap.set(closeRef.current, {
      scale: 0,
      opacity: 0,
      rotate: -90,
      pointerEvents: "none",
    });
    gsap.set(burgerRef.current, {
      scale: 1,
      opacity: 1,
      rotate: 0,
      pointerEvents: "auto",
    });
    // set nav links initial state (invisible)
    gsap.set(linksRef.current, { y: -10, opacity: 0 });
  }, []);

  // animate open/close
  useEffect(() => {
    if (!isMobile) return; // only animate mobile branch

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (showmenu) {
      tl.to(
        burgerRef.current,
        { scale: 0, opacity: 0, duration: 0.22, pointerEvents: "none" },
        0
      )
        .to(
          closeRef.current,
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 0.35,
            pointerEvents: "auto",
          },
          0
        )
        .to(
          menuRef.current,
          { y: 0, opacity: 1, pointerEvents: "auto", duration: 0.44 },
          0
        )
        .fromTo(
          linksRef.current,
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.06, duration: 0.36 },
          "-=0.2"
        );
    } else {
      // closing
      tl.to(linksRef.current, {
        y: -10,
        opacity: 0,
        stagger: 0.03,
        duration: 0.18,
      })
        .to(
          menuRef.current,
          { y: -30, opacity: 0, pointerEvents: "none", duration: 0.35 },
          "-=0.08"
        )
        .to(
          closeRef.current,
          { scale: 0, opacity: 0, duration: 0.22, pointerEvents: "none" },
          "-=0.2"
        )
        .to(
          burgerRef.current,
          { scale: 1, opacity: 1, duration: 0.25, pointerEvents: "auto" },
          "-=0.18"
        );
    }

    return () => tl.kill();
  }, [showmenu, isMobile]);

  // small helper to keep refs array up to date
  const setLinkRef = (el, i) => {
    linksRef.current[i] = el;
  };

  return (
    <>
      <div className="screen-wrapper w-screen h-screen fixed bg-white z-10 top-0 left-0 opacity-0"></div>

      <nav className="md:container nav-container h-[120px] fixed z-10 mt-8">
        <div className="nav-container-animate absolute w-full h-full inset-0 bg-white rounded-[68px]"></div>

        {isMobile ? (
          <>
            <div className="mobile-wrapper flex-around p-3 h-full relative">
              <Link to="/" className="logo" ref={logoRef}>
                <img src="/logo.png" alt="" width={isMobile ? 120 : 160} />
              </Link>

              {/* icon wrapper: both svgs are always in DOM and stacked */}
              <button
                aria-expanded={showmenu}
                onClick={() => setshowmenu((s) => !s)}
                className="relative w-[42px] h-[42px] flex items-center justify-center"
              >
                {/* Hamburger (visible when menu closed) */}
                <svg
                  ref={burgerRef}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[42px] h-[42px] absolute top-0 left-0 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                {/* Close (visible when menu open) */}
                <svg
                  ref={closeRef}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[42px] h-[42px] absolute top-0 left-0 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* menu is always rendered — GSAP toggles its position/opacity/pointerEvents */}
            <div
              ref={menuRef}
              className="menu-wrapper w-full fixed z-[1000] bg-amber-50 top-[80px] rounded-e-3xl flex flex-col items-center justify-center gap-5 p-8"
              aria-hidden={!showmenu}
            >
              {Links.map((item, index) => (
                <div
                  ref={(el) => setLinkRef(el, index)}
                  className="nav-link lg:text-[32px] text-[24px] font-[700] hover:text-[#3067D5]"
                  key={index}
                >
                  <a
                    href={`#${item.link}`}
                    onClick={() => setshowmenu((s) => !s)}
                  >
                    {item.title}
                  </a>
                </div>
              ))}

              <div
                ref={(el) => setLinkRef(el, Links.length)}
                className="nav-link lg:text-[32px] text-[24px] font-[700] hover:text-[#3067D5]"
              >
                <a href="#">sign in</a>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-around p-3 h-full relative">
            <Link to="/" className="logo" ref={logoRef}>
              <img src="/logo.png" alt="" width={160} />
            </Link>
            {Links.map((item, index) => (
              <div
                className="nav-link lg:text-[32px] text-[24px] font-[700] hover:text-[#3067D5]"
                key={index}
              >
                <a href={`#${item.link}`}>{item.title}</a>
              </div>
            ))}
            <div className="login text-[32px] font-[700] bg-[#3067D5] hover:bg-[#18397b] text-white p-4 px-10 rounded-[68px]">
              <a href="#">sign in</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
