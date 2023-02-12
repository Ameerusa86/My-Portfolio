import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              My name is Ameer hasan, I have a Master's degree in App & Web
              Development from SNHU
            </p>
          </div>
          <div>
            <ul>
              <li>1) HTML</li>
              <li>
                2) CSS and CSS frameworks and Libraries: TailwindCSS, Bootstrap,
                Material UI
              </li>
              <li>3) JavaScript & JS Frameworks (Angular JS, React)</li>
              <li>4) Node.js</li>
              <li>5) MERN stack</li>
              <li>6) HTTP & REST API </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
