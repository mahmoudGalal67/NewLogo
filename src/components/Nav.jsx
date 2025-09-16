import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Links = [
  { title: "الرئيسية", link: "About-us" },
  { title: "خدماتنا", link: "About-us" },
  { title: "من نحن", link: "About-us" },
  { title: "مشاريعنا", link: "About-us" },
];

function Nav() {
  const logoRef = useRef();
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
      scale: 6,
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
  });

  return (
    <>
      <div className="screen-wrapper w-screen h-screen fixed bg-white z-10 top-0 left-0 opacity-0"></div>
      <nav className=" md:container nav-container h-[85px]  fixed z-10  mt-8">
        <div className="nav-container-animate absolute  h-full inset-0 bg-white rounded-[68px]"></div>
        <div className="flex-around p-2 h-full relative">
          <div className="logo" ref={logoRef}>
            <img src="/logo.png" alt="" width={160} />
          </div>
          {Links.map((item, index) => (
            <div className="nav-link text-[28px] font-[700]" key={index}>
              <a href={`#${item.link}`}>{item.title}</a>
            </div>
          ))}
          <div className="login text-[28px] font-[700] bg-[#3067D5] text-white p-2 px-8  rounded-[68px]">
            <a href="#">sign in</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
