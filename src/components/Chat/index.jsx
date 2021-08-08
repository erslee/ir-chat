import { useState } from "react";
import PropTypes from "prop-types";
import { MessageInput } from "../MessageInput";
import { MessageList } from "../MessageList";
import { ChatHeader } from "../ChatHeader";
import styles from './style.module.css'

export const Chat = ({member, initialMessages, typing}) => {
  const [messages, setMessages] = useState(initialMessages);

  // const [typing, setTyping] = useState(typing);

  const formatMsg = (msg) => ({
    position: "right",
    type: "text",
    text: msg,
    date: new Date(),
  });
  const addMessage = (msg) => {
    setMessages((state) => [...state, formatMsg(msg)]);
  };

  return (
    <div className={styles.chat}>
      <ChatHeader className={styles.header} {...member} />
      <MessageList
        className={styles.messageList}
        dataSource={messages}
        isTyping={typing}
      ></MessageList>
      <MessageInput onSubmit={addMessage} />
    </div>
  );
};

Chat.propTypes = {
  initialMessages: PropTypes.array,
  typing: PropTypes.bool,
  member: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string,
    lastActivityTime: PropTypes.number
  })
}

Chat.defaultProps = {
  initialMessages: [
    {
      avatar: "https://loremflickr.com/25/25",
      title: 'Elit magna',
      avatarFlexible: true,
      position: "left",
      type: "text",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      date: new Date(),
    },
  ],
  typing: false,
  member: {
    name: "Donald",
    picture: "https://loremflickr.com/45/45",
    lastActivityTime: Date.now(),
    // acuity: 0
  }
}