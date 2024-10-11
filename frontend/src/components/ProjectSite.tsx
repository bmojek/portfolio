import React from "react";
import { Link } from "react-router-dom";
type props = {
  url: string;
  name: string;
  demo?: boolean;
};

function ProjectSite({ url, name, demo }: props) {
  return (
    <div className="text-center">
      <Link
        to={"/"}
        className="absolute top-14 left-10 font-bold bg-blue-700 px-8 py-2 rounded-2xl"
      >
        Back
      </Link>
      {demo && (
        <p className="bg-slate-400 absolute p-1 text-sm rounded-lg">
          Demo account <br></br> login: admin password: admin
        </p>
      )}

      <iframe className="w-full h-screen" src={url} title={name}></iframe>
    </div>
  );
}

export default ProjectSite;
