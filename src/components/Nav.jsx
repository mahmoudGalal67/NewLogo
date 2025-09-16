import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Links = [
  { title: "الرئيسية", link: "About-us" },
  { title: "خدماتنا", link: "About-us" },
  { title: "من نحن", link: "About-us" },
  { title: "مشاريعنا", link: "About-us" },
];

function Nav() {
  const logoRef = useRef();
  const [showmenu, setshowmenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 860 });
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const closeRef = useRef(null);
  const indicatorRef = useRef(null);
  const [active, setActive] = useState("الرئيسية");
  const linksRef = useRef([]); // store nav links
  const location = useLocation();
  const navigate = useNavigate();
  const handlelocation = (section) => {
    if (location.pathname !== "/") {
      navigate(`/#${section}`);
    }
  };

  // helper to store refs
  const setLinkRef = (el, i) => {
    if (el) linksRef.current[i] = el;
  };

  useGSAP(() => {
    // Animate links individually
    gsap.from(".nav-link", { y: -150, duration: 4, delay: 0.4 });
    gsap.from(".login", { scale: 0, duration: 3, delay: 0.4 });

    // Animate the logo separately
    const logo = logoRef.current;
    const rect = logo.getBoundingClientRect();
    const deltaX = window.innerWidth / 2 - (rect.left + rect.width / 2);
    const deltaY = window.innerHeight / 2 - (rect.top + rect.height / 2);

    gsap.from(logo, {
      x: deltaX,
      y: deltaY,
      scale: isMobile ? 2.5 : 6,
      duration: 3,
      delay: 0.4,
      ease: "power3.out",
    });

    // Screen overlay
    gsap.from(".screen-wrapper", { opacity: 1, duration: 3.5, delay: 0.4 });
    gsap.from(".nav-container-animate", {
      xPercent: 150,
      duration: 3.5,
      delay: 0.4,
    });
    gsap.to(".nav-indicator", {
      opacity: 1,
      duration: 0.5,
      delay: 3.5,
    });
  });

  // 🟢 mobile menu toggle animations
  useEffect(() => {
    if (!isMobile) return;
    if (!menuRef.current || !burgerRef.current || !closeRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (showmenu) {
      tl.to(burgerRef.current, { scale: 0, opacity: 0, duration: 0.22 })
        .to(
          closeRef.current,
          { scale: 1, opacity: 1, rotate: 0, duration: 0.35 },
          0
        )
        .to(
          menuRef.current,
          { y: 0, opacity: 1, duration: 0.44, display: "flex" },
          0
        )
        .fromTo(
          linksRef.current,
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.06, duration: 0.36 },
          "-=0.2"
        );
    } else {
      tl.to(linksRef.current, {
        y: -10,
        opacity: 0,
        stagger: 0.03,
        duration: 0.18,
      })
        .to(
          menuRef.current,
          { y: -30, opacity: 0, display: "none", duration: 0.35 },
          "-=0.08"
        )
        .to(closeRef.current, { scale: 0, opacity: 0, duration: 0.22 }, "-=0.2")
        .to(
          burgerRef.current,
          { scale: 1, opacity: 1, duration: 0.25 },
          "-=0.18"
        );
    }

    return () => tl.kill();
  }, [showmenu, isMobile]);

  useEffect(() => {
    const activeLink = document.querySelector(".nav-link.active");
    const nav_indicator = document.querySelector(".nav-indicator");
    if (activeLink && nav_indicator) {
      const rect = activeLink.getBoundingClientRect();
      const parentRect = activeLink.parentElement.getBoundingClientRect();

      nav_indicator.style.width = rect.width + "px";
      nav_indicator.style.left = rect.left - parentRect.left + "px";
      // nav_indicator.style.opacity = 1;
    }
  }, [active]);
  const handleClick = (e, name) => {
    e.preventDefault();
    document
      .querySelectorAll(".nav-link")
      .forEach((el) => el.classList.remove("active"));
    e.currentTarget.classList.add("active");
    setActive(name);
  };

  return (
    <>
      <div className="screen-wrapper w-screen h-screen fixed bg-white z-10 top-0 left-0 opacity-0"></div>
      <nav className=" md:container nav-container h-[75px]  fixed z-10  mt-8">
        <div className="nav-container-animate absolute  h-full inset-0 bg-white rounded-[68px]"></div>
        {isMobile ? (
          <>
            {/* mobile header */}
            <div className="mobile-wrapper flex-around p-3 h-full relative">
              <Link to="/" className="logo " ref={logoRef}>
                <img src="/logo.png" alt="" width={isMobile ? 120 : 160} />
              </Link>

              {/* toggle button */}
              <button
                aria-expanded={showmenu}
                onClick={() => setshowmenu((s) => !s)}
                className="relative z-[10000] w-[42px] h-[42px] flex items-center justify-center"
              >
                {/* hamburger */}
                <svg
                  ref={burgerRef}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[42px] h-[42px] absolute top-0 left-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                {/* close */}
                <svg
                  ref={closeRef}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[42px] h-[42px] absolute top-0 left-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* dropdown menu */}
            <div
              ref={menuRef}
              className="menu-wrapper w-full left-0 hidden  fixed z-[1000] bg-amber-50 top-[90px] rounded-3xl  flex-col items-center justify-center gap-5 p-8"
              aria-hidden={!showmenu}
            >
              {Links.map((item, index) => (
                <div
                  ref={(el) => setLinkRef(el, index)}
                  className="
                   nav-link lg:text-[24px] text-[24px] font-[700] hover:text-[#3067D5] relative"
                  key={index}
                >
                  <a
                    href={`#`}
                    onClick={(e) => {
                      setshowmenu(false);
                      e.preventDefault();
                      handlelocation(item.link);
                    }}
                  >
                    {item.title}
                  </a>
                </div>
              ))}
              <div
                ref={(el) => setLinkRef(el, Links.length)}
                className="nav-link lg:text-[24px] text-[24px] font-[700] hover:text-[#3067D5]"
              >
                <a
                  onClick={(e) => {
                    setshowmenu(false);
                    e.preventDefault();
                    handlelocation(item.link);
                  }}
                  href="#"
                >
                  sign in
                </a>
              </div>
            </div>
          </>
        ) : (
          // desktop nav
          <div className="flex-around p-3 h-full relative">
            <Link
              to="/"
              className="logo"
              ref={logoRef}
              onClick={() => window.location.reload()}
            >
              <img src="/logo.png" alt="" width={160} />
            </Link>
            {Links.map((item, index) => (
              <div
                className={`${
                  index == 0 ? "active" : ""
                } nav-link lg:text-[22px] text-[24px] font-[700] hover:text-[#3067D5]`}
                key={index}
                onClick={(e) => {
                  handleClick(e, item.title);
                  e.preventDefault();
                  handlelocation(item.link);
                }}
              >
                <a href={`#${item.link}`}>{item.title}</a>
              </div>
            ))}
            <div
              onClick={(e) => {
                handleClick(e, "sign in");
                e.preventDefault();
                handlelocation("sign in");
              }}
              className="nav-link text-[22px] font-[700]"
            >
              <a href="#">sign in</a>
            </div>
            <span className="nav-indicator opacity-0"></span>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;
