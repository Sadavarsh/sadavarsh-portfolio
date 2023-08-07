import React from "react";
import hero from "../assets/images/mypic.jpg";
const Hero = () => {
  const social_media = [
    {
      linkdein: "logo-linkedin",
      github: "logo-github",
      linkdein_link: "https://www.linkedin.com/in/sadavarsh-saini-b5385a220/",
      github_link: "https://github.com/Sadavarsh",
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-6/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <br /> <span>Sadavarsh Saini</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <a href="#contact"  className="btn-primary w-36 mt-8">Contact Me</a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
               <div className="flex gap-5 items-center">
                <a href={icon.linkdein_link} target="blank"> <ion-icon name={icon.linkdein}></ion-icon></a>
               <a href={icon.github_link} target="blank"> <ion-icon name={icon.github}></ion-icon></a>
               </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
