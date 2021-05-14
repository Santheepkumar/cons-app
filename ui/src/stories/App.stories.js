import React from 'react';
import App from '../App';
import '../index.css';

export default {
  title: 'Example/App',
  component: App,
};

const Template = () => <App size="big" />;
const TemplateTwo = () => <App size="small" />;

export const Primary = Template.bind({});
export const Secondary = TemplateTwo.bind({});
