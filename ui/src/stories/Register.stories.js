import React from "react";
import Register from "../components/Register";
import "../index.css";

export default {
  title: "Register",
  component: Register
};

const Template = args => <Register />;

export const Primary = Template.bind({});
Primary.args = {};
  