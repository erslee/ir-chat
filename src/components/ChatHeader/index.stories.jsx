import React from "react";

import ChatHeader from "./index";

export default {
  title: "Components/Chat Header",
  component: ChatHeader,
};

const Template = (args) => <ChatHeader {...args} />;

export const Header = Template.bind({});
Header.args = {
  name: "Donald",
  picture: "https://loremflickr.com/45/45",
  lastActivityTime: Date.now(),
  // acuity: 0
};
