import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../projects.json";

function Projects() {
  const { projects } = projectsData;

  return (
    <div className="flex flex-wrap justify-center gap-7 pt-10">
      {projects.map((project) => (
        <ProjectCard
          key={project.name}
          name={project.name}
          desc={project.description}
          img={project.img}
        />
      ))}
    </div>
  );
}

export default Projects;
