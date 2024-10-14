import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

type Props = {
  url: string;
  name: string;
  demo?: boolean;
};

function ProjectSim({ url, name, demo }: Props) {
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <div className="text-center bg-[#0C0D0E] h-screen">
      <Link
        to="/"
        className="absolute top-14 left-10 font-bold bg-blue-700 px-8 py-2 rounded-2xl"
      >
        Back
      </Link>

      {demo && (
        <p className="bg-slate-400 absolute p-1 text-sm rounded-lg">
          Demo account <br /> login: admin password: admin
        </p>
      )}

      {loading && (
        <div className="flex items-center justify-center h-full">
          <Loader />
        </div>
      )}

      <div
        className={`relative w-[300px] h-[calc(100vh-200px)] mx-auto overflow-hidden scale-150 ${
          loading ? "hidden" : ""
        }`}
      >
        <iframe
          src={url}
          className="absolute w-[1000px] h-[calc(100%+400px)] -top-[150px] -left-[715px]"
          title={name}
          data-snack-iframe="true"
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </div>
  );
}

export default ProjectSim;
