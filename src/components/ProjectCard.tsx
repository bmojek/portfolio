import React from "react";

type props = {
  name: string;
  desc: string;
  img: string;
};

function ProjectCard({ name, desc, img }: props) {
  return (
    <div className="ProjectCard w-96 p-5 border-2 rounded-3xl shadow-2xl text-black cursor-pointer hover:scale-105">
      <img src={img} alt={img} className="h-52"></img>
      <h2 className="text-3xl font-bold">{name}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default ProjectCard;
