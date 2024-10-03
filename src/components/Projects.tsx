import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../projects.json";

function Projects() {
  const { projects } = projectsData;

  return (
    <div className="grid grid-cols-1 gap-7 xl:grid-cols-3 w-2/3 m-auto p-10">
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
