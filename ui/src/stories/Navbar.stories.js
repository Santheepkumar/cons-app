import React from "react";
import Navbar from "../components/common/Navbar";
import "../index.css";

export default {
  title: "Common/Navbar",
  component: Navbar
};

const Template = args => (
  <div className="bg-light dark:bg-dark h-screen ">
    <Navbar {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
