import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

function Projects() {
  const projects = [
    {
      title: "",
      img: "/projects/project1.png",
    },
    {
      title: "",
      img: "/projects/project2.jpg",
    },
    {
      title: "",
      img: "/projects/project3.jpg",
    },
    {
      title: "",
      img: "/projects/project4.jpg",
    },
    {
      title: "",
      img: "/projects/project5.jpg",
    },
    {
      title: "",
      img: "/projects/project6.jpg",
    },
  ];

  const cardRef = useRef();
  const navigate = useNavigate();

  const handleClick = () => {
    const card = cardRef.current;
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

    // Animate to banner
    gsap.to(clone, {
      top: 180, // same as details banner margin-top
      left: "8%", // same as body padding-inline
      width: "84vw", // 100vw - (8%*2)
      height: "340px", // same as details banner img
      borderRadius: "86px",
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        document.body.removeChild(clone);
        // Scroll smoothly to top
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate(`/project/1`);
      },
    });
  };

  return (
    <section id="Projects" className="p-12 bg-[#EBEBEB] mt-24 rounded-[48px]">
      <h2 className="mb-8 text-4xl font-bold">مشاريعنا</h2>
      <div className="wrapper flex-around gap-12 flex-wrap items-start">
        {projects.map((item, i) => (
          <div
            ref={cardRef}
            className="item flex flex-col items-center justify-end w-[48%] h-[180px] rounded-t-4xl"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <button
              onClick={handleClick}
              className="p-5 px-16 rounded-t-4xl text-white bg-[#124EB2] font-bold text-3xl"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
