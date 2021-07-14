import React from "react";
import Navbar from "./common/Navbar";

function Home() {
  return (
    <div className="bg-white dark:bg-dark h-screen ">
      <Navbar />

      <div className="ml-40 mt-32">
        <h1 className=" dark:text-white text-black font-extrabold text-8xl">
          Wecome to con<span className="p-0 m-0 font-thin">tact</span>s
        </h1>
        <h2 className="mt-8 dark:text-gray-300  text-gray-800 text-4xl font-medium mx-4">
          Solid app to store your contacts
        </h2>
        <button
          className="py-3 px-10 rounded-xl bg-purple-800 text-2xl text-white mt-20 mx-4"
          type="button"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Home;
