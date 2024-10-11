import React from "react";
import { Link } from "react-router-dom";
type props = {
  url: string;
  name: string;
};

function ProjectSite({ url, name }: props) {
  return (
    <div>
      <Link
        to={"/"}
        className="absolute top-14 left-10 font-bold bg-blue-700 px-8 py-2 rounded-2xl"
      >
        Back
      </Link>
      <iframe className="w-full h-screen" src={url} title={name}></iframe>
    </div>
  );
}

export default ProjectSite;
