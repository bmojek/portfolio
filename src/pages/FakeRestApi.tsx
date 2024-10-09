import React from "react";
import { Link } from "react-router-dom";
function FakeRestApi() {
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
        src="/projects/FakeRestApi/index.html"
      ></iframe>
    </div>
  );
}

export default FakeRestApi;
