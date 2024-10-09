import React from "react";
import { Link } from "react-router-dom";

function SummerRefresh() {
  return (
    <div>
      <Link
        to={"/"}
        className="absolute top-5 left-10 bg-blue-400 px-5 py-2 rounded-2xl"
      >
        Back
      </Link>
      <iframe
        className="w-full h-screen"
        src="/projects/SummerRefresh/index.html"
      ></iframe>
    </div>
  );
}

export default SummerRefresh;
