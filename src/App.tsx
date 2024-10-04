import { useState, useEffect } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import Typewritter from "./components/Typewritter";
import Projects from "./components/Projects";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = () => {
    window.scrollTo({
      top: window.scrollY + 950,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <div className="grid grid-cols-1 gap-0 xl:grid-cols-3 pt-[10%] w-2/3 m-auto">
        <div className="col-span-2 self-center text-center xl:text-left order-last xl:order-first">
          <h1 className="text-7xl md:text-8xl xl:text-9xl font-light pb-12">
            <Typewritter />
            &nbsp;
          </h1>

          <p className="p-3 xl:border-l-2 border-blue-500">
            Hello, my name is Bartłomiej Mojek. I’m a final-year Computer
            Science student and web developer specializing in responsive web
            applications and React Native apps. I love creating user-friendly
            solutions with HTML, CSS, JavaScript, and frameworks such as React
            and Node.js.
          </p>
          <p className="p-3 xl:border-l-2 border-blue-500">
            Check out my projects and feel free to get in touch!
          </p>
        </div>
        <div className="col-span-1 mx-auto text-2xl grid">
          <img
            src="/website.png"
            className="max-w-96 w-full"
            alt="My portfolio website"
          />
        </div>
      </div>
      {isVisible && (
        <div
          className="absolute bottom-10 left-1/2 p-5 cursor-pointer bg-blue-600 text-center rounded-full animate-bounce flex items-center justify-center"
          onClick={handleClick}
        >
          <FaAngleDoubleDown className="text-white text-3xl" />
        </div>
      )}
      <div className="bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0a001b"
            fillOpacity="1"
            d="M0,224L120,197.3C240,171,480,117,720,101.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
        <div className="mx-auto w-2/3">
          <h1 className="text-black text-5xl font-semibold text-center">
            My Projects
          </h1>
          <Projects />
        </div>
      </div>
      <div className="bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0a001b"
            fillOpacity="1"
            d="M0,64L120,96C240,128,480,192,720,186.7C960,181,1200,107,1320,69.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <footer className="-mt-[5%]">
          <div className="w-2/3 mx-auto">
            <h3>© 2024 bmojek.pl</h3>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
