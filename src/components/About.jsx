import React from "react";
import aboutImg from "../assets/images/mypic.jpg";
const About = () => {
  const info = [
    { text: "Years experience", count: "02" },
    { text: "Completed Projects", count: "5" }
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hello, my name is Sadavarsh Saini, and I’m a full stack
                developer. With 2 years of hands on experience in web
                development, I have a strong command over both front-end and
                back-end technologies, allowing me to build complete and
                scalable applications. On the front-end side, I specialize in
                HTML, CSS, and JavaScript frameworks such as React. I’m
                passionate about creating intuitive user interfaces that provide
                an exceptional user experience. I pay great attention to detail,
                ensuring that the websites or applications I develop are
                responsive, visually appealing, and accessible across different
                devices and browsers. Moving to the back end, I’m proficient in
                server-side language Node.js. I have extensive experience
                working with databases such as MongoDB, and MySQL and I can
                design efficient database structures and write optimized
                queries. I’m familiar with RESTful APIs and know how to
                integrate them into applications to enable seamless
                communication between the front end and back end.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a
                href="https://drive.google.com/file/d/1E2i3cqXnDkAciV7p9IBZrJTtjNeLo8SD/view?usp=sharing" target="blank"
                download
              >
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
