import React from "react";

import { Avatar } from "./index";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Component = Template.bind({});
Component.args = {
  name: "Donald",
  picture: "https://loremflickr.com/45/45",
};
