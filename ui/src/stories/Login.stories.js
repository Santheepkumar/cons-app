import React from "react";
import Login from "../components/Login";
import "../index.css";

export default {
  title: "Login",
  component: Login
};

const Template = args => <Login />;

export const Primary = Template.bind({});
Primary.args = {};
  