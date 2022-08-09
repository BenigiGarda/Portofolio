import React from "react";
import Navbar from "../components/Navbar";

const Home = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Home;
