import { useState } from "react";

import Navbar from "./common/Navbar";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  return (
    <div className="dark:bg-dark bg-light min-h-screen">
      <Navbar />
      <div className="border w-1/3 mt-20 mx-auto rounded-3xl py-12 px-10">
        <h1 className="mx-10 pb-4 text-4xl text-white font-bold border-b">Sign in to Cons</h1>

        <div className="mt-20 ml-10">
          <label htmlFor="" className="text-white text-lg">
            Email
          </label>
          <div className="py-1">
            <input
              type="text"
              className="block w-4/6 py-2.5 sm:text-sm px-2 bg-light focus:outline-none rounded-md"
              value={form.email}
              onChange={e =>
                setForm({
                  ...form,
                  email: e.target.value
                })
              }
            />
          </div>
        </div>
        <div className="mt-10 ml-10">
          <label htmlFor="" className="text-white text-lg">
            Password
          </label>
          <div className="py-1">
            <input
              type="password"
              className="block w-4/6 py-2.5 sm:text-sm px-2 bg-light focus:outline-none rounded-md"
              value={form.password}
              onChange={e =>
                setForm({
                  ...form,
                  password: e.target.value
                })
              }
            />
          </div>
        </div>
        <div className="mt-60 flex justify-between">
          <a href="" className="text-blue-600 text-xl underline px-10">
            I dont have an account
          </a>
          <button
            onClick={() => console.log(form)}
            className="mr-8 bg-blue-600 px-8 py-1.5 rounded-xl text-white font-medium"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
