import React from "react";
import App from "../App";
import "../index.css";

export default {
  title: "Example/App",
  component: App,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "App",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "App",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "App",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
