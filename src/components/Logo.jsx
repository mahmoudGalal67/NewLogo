"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function LogoAnimation() {
  const logoRef = useRef();

  useGSAP(() => {
    const logo = logoRef.current;
    const rect = logo.getBoundingClientRect();

    // Calculate the center of the viewport
    const deltaX = window.innerWidth / 2 - (rect.left + rect.width / 2);
    const deltaY = window.innerHeight / 2 - (rect.top + rect.height / 2);

    // Animate the logo to the center
    gsap.fromTo(
      logo,
      { x: deltaX, y: deltaY, scale: 6, duration: 3, ease: "power3.out" }, // end
      { x: 0, y: 0, scale: 1, position: "fixed" } // start
    );
  });

  return (
    <div>
      <div
        ref={logoRef}
        style={{ position: "fixed", top: 20, left: 20, zIndex: 1000 }}
      >
        <img src="/logo.png" alt="Logo" width={160} />
      </div>
    </div>
  );
}
