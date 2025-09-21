import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  useGSAP(() => {
    const ProjectDetails = document.querySelector("#ProjectDetails");

    gsap.fromTo(
      ProjectDetails,
      { autoAlpha: 0, y: "180%" },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.5,
      }
    );
  }, []);

  return (
    <div className="project-details">
      <section className="banner md:mt-[180px] mt-[120px] md:p-12 p-2 md:h-[auto] h-[180px]  md:rounded-[86px] rounded-2xl bg-[#EBEBEB]">
        <img
          src={`/projects/project${id}.jpg`}
          className="w-full md:h-[340px] h-full object-cover  md:rounded-[86px] rounded-2xl"
          alt=""
        />
      </section>
      <div id="ProjectDetails" className="content md:mt-[140px] mt-[45px]">
        <img src="/pattern.png" className="w-full" alt="" />
      </div>
    </div>
  );
}

export default ProjectDetails;
