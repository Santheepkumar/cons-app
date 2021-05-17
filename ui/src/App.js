import React from "react";
// import Navbar from "./components/common/Navbar";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="bg-white dark:bg-black h-screen transition duration-500">
      <button
        type="button"
        className="text-black dark:text-white border rounded-md px-4 py-2 focus:outline-none"
        onClick={() => setTheme(colorTheme)}
      >
        Switch Theme
      </button>
      <div className="text-black dark:text-white">Next theme - {colorTheme}</div>
      <div className=" text-black dark:text-white">Hello React Tailwind Storybook</div>
    </div>
    // <Navbar />
  );
}

export default App;
