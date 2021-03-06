import React from "react";

import { MessageArea } from "./index";

export default {
  title: "Components/Message List",
  component: MessageArea,
};

const Template = (args) => <MessageArea {...args} />;

export const Component = Template.bind({});
Component.args = {
  dataSource: [{
    avatar: "https://loremflickr.com/25/25",
    title: "Elit magna",
    avatarFlexible: true,
    position: "left",
    type: "text",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    date: new Date(),
  }],
  isTyping: false,
};
