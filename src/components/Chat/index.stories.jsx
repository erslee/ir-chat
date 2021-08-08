import React from 'react';

import { Chat } from './index';
// import * as HeaderStories from './Header.stories';
import MessageListStory from '../MessageList/index.stories'

export default {
  title: 'Pages/Chat',
  component: Chat,
};

const Template = (args) => <Chat {...args} />;

export const Page = Template.bind({});

Page.args = {
    ...MessageListStory.args
}

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   ...HeaderStories.LoggedIn.args,
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {
//   ...HeaderStories.LoggedOut.args,
// };
