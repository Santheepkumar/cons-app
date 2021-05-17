import React from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { HomeIcon, LightMode, DarkMode } from "./Icons";

function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <nav className="bg-dark border-b border-white py-4 flex justify-between">
      <div className="pl-20 flex items-center">
        <HomeIcon height={50} width={50} />
        <h1 className="text-white mt-1 ml-4 tracking-wider text-xl">Why cons ?</h1>
      </div>
      {colorTheme === "dark" ? (
        <div
          className="mr-20 border bg-purple-600 rounded-full p-1 cursor-pointer"
          onClick={() => setTheme(colorTheme)}
          role="button"
          aria-hidden="true"
        >
          <LightMode stroke="white" className="w-10 h-10" />
        </div>
      ) : (
        <div
          className="mr-20 border bg-gray-600 rounded-full p-1 cursor-pointer"
          onClick={() => setTheme(colorTheme)}
          role="button"
          aria-hidden="true"
        >
          <DarkMode stroke="yellow" fill="gray" className="w-10 h-10" />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
