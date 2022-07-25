import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
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
      {/*Education*/}
      <div className="flex items-center justify-center flex-col text-center font-bold py-80 lg:py-56 bg-green-500">
        <div className="m-5 lg:m-20">
          <h1 className="font-bold lg:text-7xl text-4xl">
            Benigi Garda Anvadin
          </h1>
          <h1 className="font-bold lg:text-6xl text-3xl pt-8 lg:pt-14">
            Front-End Developer
          </h1>
        </div>
      </div>
      {/*Experience*/}
      <div className="flex items-center justify-center flex-col text-center font-bold py-80 lg:py-56 bg-purple-500">
        <div className="m-5 lg:m-20">
          <h1 className="font-bold lg:text-7xl text-4xl">
            Benigi Garda Anvadin
          </h1>
          <h1 className="font-bold lg:text-6xl text-3xl pt-8 lg:pt-14">
            Front-End Developer
          </h1>
        </div>
      </div>
      {/*Project*/}
      <div className="flex items-center justify-center flex-col text-center font-bold py-80 lg:py-56 bg-red-500">
        <div className="m-5 lg:m-20">
          <h1 className="font-bold lg:text-7xl text-4xl">
            Benigi Garda Anvadin
          </h1>
          <h1 className="font-bold lg:text-6xl text-3xl pt-8 lg:pt-14">
            Front-End Developer
          </h1>
        </div>
      </div>
    </>
  );
}
