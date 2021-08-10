import React from "react";

import { Buble } from "./index";

export default {
  title: "Components/Buble",
  component: Buble,
};

const Template = (args) => <Buble {...args} />;

export const Component = Template.bind({});
Component.args = {
  data: {
    avatar: "https://loremflickr.com/50/50",
    title: "Elit magna",
    avatarFlexible: true,
    position: "left",
    type: "text",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    date: new Date(),
  }
};
