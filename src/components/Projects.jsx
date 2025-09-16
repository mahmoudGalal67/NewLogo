import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Projects() {
  const sectionRef = useRef(null);

  const projects = [
    { id: "1", img: "/projects/project1.jpg" },
    { id: "2", img: "/projects/project2.jpg" },
    { id: "3", img: "/projects/project3.jpg" },
    { id: "4", img: "/projects/project4.jpg" },
    { id: "5", img: "/projects/project5.jpg" },
    { id: "6", img: "/projects/project6.jpg" },
  ];

  const cardRef = useRef();
  const navigate = useNavigate();

  const handleClick = (id, e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Clone card
    const clone = card.cloneNode(true);
    clone.style.position = "fixed";
    clone.style.top = rect.top + "px";
    clone.style.left = rect.left + "px";
    clone.style.width = rect.width + "px";
    clone.style.height = rect.height + "px";
    clone.style.zIndex = 9999;
    document.body.appendChild(clone);

    // GSAP timeline
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.removeChild(clone);
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    });

    // Animate
    tl.to(clone, {
      top: 180, // banner top
      left: "8%",
      width: "84vw",
      height: "340px",
      borderRadius: "86px",
      duration: 1.2,
      ease: "power3.inOut",
    });

    // ⏳ Navigate at 50% of animation
    tl.call(
      () => {
        navigate(`/project/${id}`);
      },
      null,
      0.4
    ); // 0.4 = halfway through timeline
  };

  useGSAP(() => {
    const ProjectSection = document.querySelector("#Projects");

    gsap.fromTo(
      ProjectSection,
      { autoAlpha: 0, y: "80%" },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none play play",
        },
      }
    );
  }, []);

  return (
    <section
      id="Projects"
      ref={sectionRef}
      className="lg:p-12 p-5 bg-[#EBEBEB] mt-24 rounded-[48px]"
    >
      <h2 className="mb-8 mt-[5] text-4xl font-bold">مشاريعنا</h2>
      <div className="wrapper flex-around lg:gap-12 gap-3 flex-wrap items-start">
        {projects.map((item) => (
          <div
            onClick={(e) => handleClick(item.id, e)}
            ref={cardRef}
            className="item flex flex-col items-center justify-center lg:w-[45%] w-[42%] h-[180px] rounded-4xl cursor-pointer"
            style={{ backgroundImage: `url(${item.img})` }}
            key={item.id}
          >
            <button className="lg:p-5 p-3 lg:px-16 px-5 rounded-4xl text-white font-bold lg:text-2xl text-lg opacity-0">
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
