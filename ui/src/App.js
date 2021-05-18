import React from "react";
import useTheme from "./hooks/useTheme";

function App() {
  const [nextTheme, setTheme] = useTheme();
  return (
    <div className="bg-white dark:bg-black h-screen pt-10 ">
      <div className="flex justify-center">
        <button
          type="button"
          className="border border-gray-200 py-2 px-4 rounded-lg focus:outline-none text-black dark:text-white hover:border-blue-300"
          onClick={() => setTheme(nextTheme)}
        >
          Switch Theme
        </button>

        <div className="ml-5 text-2xl text-black dark:text-white">
          Hello Light Mode and Dark Mode
        </div>
      </div>
    </div>
  );
}

export default App;
