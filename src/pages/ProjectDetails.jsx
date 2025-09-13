import React from "react";

function ProjectDetails() {
  return (
    <div className="project-details">
      <section className="banner mt-[180px] p-12 rounded-[86px] bg-[#EBEBEB]">
        <img
          src="/projects/project6.jpg"
          className="w-full h-[340px] object-cover  rounded-[86px]"
          alt=""
        />
      </section>
      <div className="content mt-[140px]">
        <img src="/pattern.png" className="w-full" alt="" />
      </div>
    </div>
  );
}

export default ProjectDetails;
