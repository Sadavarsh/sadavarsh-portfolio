import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project6.JPG";
import project2 from "../assets/images/project-1.JPG";
import project3 from "../assets/images/project-2.JPG";
import project4 from "../assets/images/project-3.JPG";
import project5 from "../assets/images/project-4.JPG";
import project6 from "../assets/images/project-5.JPG";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
  const projects = [
   {
      img: project1,
      name: "MERN E-commerce Admin Dashboard App",
      github_link: "https://github.com/Sadavarsh/shopkart-mern-app",
      live_link: "https://admin-frontend-p39t.onrender.com/",
    },
    {
      img: project2,
      name: "MERN E-commerce App",
      github_link: "https://github.com/Sadavarsh/mern-ecommerce-app",
      live_link: "https://clumsy-pear-shrug.cyclic.app/",
    },
    {
      img: project3,
      name: "Movie App",
      github_link: "https://github.com/Sadavarsh/react-movie-app",
      live_link: "https://react-movie-app-three-delta.vercel.app/",
    },
    {
      img: project4,
      name: "Ecommerce App",
      github_link: "https://github.com/Sadavarsh/React-ecommerce-app",
      live_link: "https://react-ecommerce-app-tau.vercel.app/",
    },
    {
      img: project5,
      name: "Video Sharing App",
      github_link: "https://github.com/Sadavarsh/youtube-clone",
      live_link: "https://youtube-clone-six-fawn.vercel.app/",
    },
    {
      img: project6,
      name: "Ecommerce App",
      github_link: "https://github.com/Sadavarsh/js-ecommerce-website",
      live_link: "https://js-ecommerce-website.vercel.app/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className=" w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
