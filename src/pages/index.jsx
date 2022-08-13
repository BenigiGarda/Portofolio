/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import project1 from "../../public/images/Project1.jpg";
import HomeLayout from "../layouts/Home";
import githubIcon from "../../public/images/githubIcon.svg";

function Home() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  // useEffect(() => {
  //   tl.current = gsap
  //     .timeline()
  //     .to(q(".title"), {
  //       opacity: 1,
  //       duration: 1,
  //       ease: "Power3.easeOut",
  //       y: -20,
  //     })
  //     .to(q(".job"), {
  //       opacity: 1,
  //       duration: 1,
  //       ease: "Power3.easeOut",
  //       y: -20,
  //     });
  // });
  return (
    <>
      <HomeLayout>
        <main id="portofolio-home">
          <div className="container mx-auto">
            {/* Home */}
            <div className="flex text-center justify-center items-center flex-col font-bold py-80 lg:py-56 ">
              <div className="m-5 lg:m-20" ref={el}>
                <h1 className="title lg:text-7xl text-4xl pt-5 font-cizel">
                  Benigi Garda Anvadin
                </h1>
                <h1 className="job font-cizel lg:text-6xl text-3xl pt-13 lg:pt-14">
                  Front-end Developer
                </h1>
              </div>
            </div>
            {/*About*/}
            <div className="flex flex-col ">
              <div className="m-5 lg:m-14">
                <div className="flex flex-col w-full justify-center items-center ">
                  <div className="w-full flex flex-col items-center justify-center mb-10">
                    <h1 className="font-cizel font-bold lg:text-7xl text-4xl mb-10">
                      About Me
                    </h1>
                    <div className="w-6/12 sm:w-4/12 px-4  overflow-hidden relative flex items-center justify-center flex-col">
                      <img
                        src="/images/AboutMe2.jpg"
                        alt="..."
                        className=" w-1/2 h-1/2 object-fill inline m-auto"
                      />
                    </div>
                    <p className="font-cizel text-4xl w-3/4 mt-5 text-justify pl-14">
                      "Learn something new, gain experience points, level up,
                      repeat"
                    </p>
                  </div>

                  <p className="font-cizel text-4xl w-3/4 mt-5 text-justify">
                    I am a developer with great enthusiasm for front-end
                    development and engineering. I am also very passionate about
                    educating myself with new experiences, which I believe will
                    make my life and future more meaningful.
                  </p>
                </div>
              </div>
            </div>
            {/*Project*/}
            <div className="flex flex-col ">
              <div className="m-5 lg:m-14">
                <div className="w-full flex flex-col">
                  {" "}
                  <div className="w-full flex items-center justify-center">
                    <h1 className="font-cizel font-bold lg:text-7xl text-4xl">
                      Project
                    </h1>
                  </div>
                  {/* Project 1 */}
                  <div className="flex flex-row justify-between">
                    <div className="w-1/2 mr-10 ">
                      {" "}
                      <h1 className="font-cizel font-bold lg:text-5xl text-3xl pt-8 lg:pt-14">
                        1. Pabryk Mobile
                      </h1>
                      <p className="font-cizel text-3xl mt-5 text-justify ml-12">
                        I made a mobile application as my first project when I
                        was an intern in PT. Fanabaka Teknologi.
                      </p>
                      <p className="font-cizel text-3xl mt-5 text-justify ml-12">
                        My task was to create a mobile application that worked
                        to sell the company's products using group buying
                        method.
                      </p>
                      <p className="font-cizel text-3xl mt-5 text-justify ml-12">
                        This application was created by using React Native,
                        Node.js, Google Analytics, and Firebase.
                      </p>
                      <h1 className="font-cizel font-bold lg:text-5xl text-3xl pt-8 lg:pt-14 ml-12">
                        What i learned
                      </h1>
                      <p className="font-cizel text-3xl mt-5 text-justify ml-12">
                        I learned react native and react framework basics from
                        scratch in this project and in addition, I learned to
                        connect the project with the company database and APIs
                        and implement Google Analytics and Firebase into
                        applications.
                      </p>
                    </div>
                    <div className="w-1/2">
                      <img
                        src="/images/Project1.jpg"
                        alt=""
                        className="w-full h-full pt-8 lg:pt-14"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="w-1/2 mr-10">
                      <h1 className="font-cizel font-bold lg:text-5xl text-3xl pt-8 lg:pt-14">
                        2. Pabryk Website
                      </h1>
                      <p className="font-cizel text-3xl mt-5 text-justify ml-12">
                        This was my second project, I made a website based of
                        Pabryk mobile application
                      </p>
                      <p className="font-cizel text-3xl mt-5 text-justify ml-12">
                        The website is integrated with the company's APIs and
                        Database.
                      </p>
                      <p className="font-cizel text-3xl mt-5 text-justify ml-12">
                        This application was created by using Next.js, Node.js
                        and Tailwind CSS.
                      </p>
                      <h1 className="font-cizel font-bold lg:text-5xl text-3xl pt-8 lg:pt-14 ml-12 ">
                        What i learned
                      </h1>
                      <p className="font-cizel text-3xl mt-5 text-justify ml-12">
                        I learned how to create a website using Next.js and
                        Tailwind CSS Framework.
                      </p>
                    </div>
                    <div className="w-1/2">
                      <img
                        src="/images/Project1.jpg"
                        alt=""
                        className="w-full h-full pt-8 lg:pt-14"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Skills*/}
            <div className="flex flex-col">
              <div className="m-5 lg:m-20">
                <div className="flex flex-col w-full justify-center items-center ">
                  <div className="w-full flex flex-col items-center justify-center mb-10">
                    <h1 className="font-cizel font-bold lg:text-7xl text-4xl mb-10">
                      Skills
                    </h1>
                  </div>
                  <div className="w-3/4 flex flex-row justify-between pb-56">
                    <div className="w-1/2 space-y-5">
                      <p className="text-4xl font-cizel">Figma</p>
                      <p className="text-4xl font-cizel">Axure</p>
                      <p className="text-4xl font-cizel">Firebase</p>
                      <p className="text-4xl font-cizel">Tailwind CSS</p>
                    </div>
                    <div className="w-1/2 space-y-5">
                      <p className="text-4xl font-cizel">React.js</p>
                      <p className="text-4xl font-cizel">Next.js</p>
                      <p className="text-4xl font-cizel">React Native</p>
                      <p className="text-4xl font-cizel">Google Analytics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact */}
            <div className="flex flex-col">
              <div className="m-5 lg:m-20">
                <div className="flex flex-col w-full justify-center items-center ">
                  <div className="w-full flex flex-col items-center justify-center mb-10">
                    <h1 className="font-cizel font-bold lg:text-7xl text-4xl mb-10">
                      Contact
                    </h1>
                  </div>
                  <div className="w-3/4 flex flex-row justify-between pb-56">
                    <a
                      href="mailto:benigi.garda19@gmail.com"
                      className="w-1/6 h-1/6"
                    >
                      <img
                        src="/images/gmailIcon.svg"
                        alt=""
                        className="w-full h-full pt-8 lg:pt-14"
                      />
                    </a>
                    <a
                      href="https://github.com/BenigiGarda"
                      className="w-1/6 h-1/6"
                    >
                      {" "}
                      <img
                        src="/images/githubIcon.svg"
                        alt=""
                        className="w-full h-full pt-8 lg:pt-14"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/benigi-garda-anvadin-7439411a4/"
                      className="w-1/6 h-1/6"
                    >
                      <img
                        src="/images/linkedInIcon.svg"
                        alt=""
                        className="w-full h-full pt-8 lg:pt-14"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </HomeLayout>
    </>
  );
}
export default Home;
Home.layout = HomeLayout;
