import React from 'react';

import { Chat } from './index';
// import * as HeaderStories from './Header.stories';
import MessageListStory from '../MessageArea/index.stories'

export default {
  title: 'Pages/Chat',
  component: Chat,
};

const Template = (args) => <Chat {...args} />;

export const Page = Template.bind({});

Page.args = {
    ...MessageListStory.args
}