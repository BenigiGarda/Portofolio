/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import project1 from "../../public/images/Project1.jpg";
import HomeLayout from "../layouts/Home";

function Home() {
  return (
    <>
      <HomeLayout>
        <main id="portofolio-home">
          <div className="container mx-auto">
            {/* Home */}
            <div className="flex items-center justify-center flex-col text-center font-bold py-80 lg:py-56 bg-yellow-500">
              <div className="m-5 lg:m-20">
                <h1 className="font-bold lg:text-7xl text-4xl">
                  Benigi Garda Anvadin
                </h1>
                <h1 className="font-bold lg:text-6xl text-3xl pt-8 lg:pt-14">
                  Front-end Developer
                </h1>
              </div>
            </div>
            {/*About*/}
            <div className="flex flex-col bg-green-500">
              <div className="m-5 lg:m-14">
                <div className="flex flex-col w-full justify-center items-center ">
                  <div className="w-full flex flex-col items-center justify-center mb-10">
                    <h1 className="font-bold lg:text-7xl text-4xl mb-10">
                      About Me
                    </h1>
                    <div className="w-6/12 sm:w-4/12 px-4  overflow-hidden relative flex items-center justify-center flex-col">
                      <img
                        src="/images/AboutMe2.jpg"
                        alt="..."
                        className=" w-1/2 h-1/2 object-fill inline m-auto"
                      />
                    </div>
                    <p className="font-light text-4xl w-3/4 mt-5 text-justify pl-14">
                      "Learn something new, gain experience points, level up,
                      repeat"
                    </p>
                  </div>

                  <p className="font-light text-4xl w-3/4 mt-5 text-justify">
                    I am a developer with great enthusiasm for front-end
                    development and engineering. I am also very passionate about
                    educating myself with new experiences, which I believe will
                    make my life and future more meaningful.
                  </p>
                </div>
              </div>
            </div>
            {/*Project*/}
            <div className="flex flex-col bg-purple-500">
              <div className="m-5 lg:m-14">
                <div className="w-full flex flex-col">
                  {" "}
                  <div className="w-full flex items-center justify-center">
                    <h1 className="font-bold lg:text-7xl text-4xl">Project</h1>
                  </div>
                  {/* Project 1 */}
                  <div className="flex flex-row justify-between">
                    <div className="w-1/2 mr-10 ">
                      {" "}
                      <h1 className="font-bold lg:text-6xl text-3xl pt-8 lg:pt-14">
                        1. Pabryk Mobile
                      </h1>
                      <p className="font-normal text-3xl mt-5 text-justify ml-16 pl-2">
                        I made a mobile application as my first project when I
                        was an intern in PT. Fanabaka Teknologi.
                      </p>
                      <p className="font-normal text-3xl mt-5 text-justify ml-16 pl-2">
                        My task was to create a mobile application that worked
                        to sell the company's products using group buying
                        method.
                      </p>
                      <p className="font-normal text-3xl mt-5 text-justify ml-16 pl-2">
                        This application was created by using React Native,
                        Node.js, Google Analytics, and Firebase.
                      </p>
                      <h1 className="font-bold lg:text-6xl text-3xl pt-8 lg:pt-14 ml-16 pl-2">
                        What i learned
                      </h1>
                      <p className="font-normal text-3xl mt-5 text-justify ml-16 pl-2">
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
                  <div className="w-1/2 mr-10 ">
                    <h1 className="font-bold lg:text-6xl text-3xl pt-8 lg:pt-14">
                      2. Pabryk Website
                    </h1>
                    <p className="font-normal text-3xl mt-5 text-justify ml-16 pl-2">
                      This was my second project, I made a website based of
                      Pabryk mobile application
                    </p>
                    <p className="font-normal text-3xl mt-5 text-justify ml-16 pl-2">
                      The website is integrated with the company's APIs and
                      Database.
                    </p>
                    <p className="font-normal text-3xl mt-5 text-justify ml-16 pl-2">
                      This application was created by using Next.js, Node.js and
                      Tailwind CSS.
                    </p>
                    <h1 className="font-bold lg:text-6xl text-3xl pt-8 lg:pt-14 ml-16 pl-2">
                      What i learned
                    </h1>
                    <p className="font-normal text-3xl mt-5 text-justify ml-16 pl-2">
                      I learned how to create a website using Next.js and
                      Tailwind CSS Framework.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Skills*/}
            <div className="flex flex-col  bg-red-500">
              <div className="m-5 lg:m-20">
                <div className="flex flex-col w-full justify-center items-center ">
                  <div className="w-full flex flex-col items-center justify-center mb-10">
                    <h1 className="font-bold lg:text-7xl text-4xl mb-10">
                      Skills
                    </h1>
                  </div>
                  <div className="w-3/4 flex flex-row justify-between bg-green-500 ">
                    <div className="w-1/2 space-y-5">
                      <p className="text-4xl">Figma</p>
                      <p className="text-4xl">Axure</p>
                      <p className="text-4xl">Firebase</p>
                      <p className="text-4xl">Tailwind CSS</p>
                    </div>
                    <div className="w-1/2 space-y-5">
                      <p className="text-4xl">React.js</p>
                      <p className="text-4xl">Next.js</p>
                      <p className="text-4xl">React Native</p>
                      <p className="text-4xl">Google Analytics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact */}
            <div className="flex items-center justify-center flex-col text-center font-bold py-72 lg:py-56 bg-blue-500">
              <div className="m-5 lg:m-20">
                <h1 className="font-bold lg:text-7xl text-4xl">
                  Benigi Garda Anvadin
                </h1>
                <h1 className="font-bold lg:text-6xl text-3xl pt-8 lg:pt-14">
                  Front-End Developer
                </h1>
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
