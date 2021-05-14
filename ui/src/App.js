import React from 'react';

function App({ size }) {
  return (
    <div
      className={`${
        size === 'big' ? 'text-4xl' : 'text-xl'
      } text-blue-500 font-bold tracking-wider text-center`}
    >
      Hello React Tailwind Storybook
    </div>
  );
}

export default App;
