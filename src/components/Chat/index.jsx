import { useState } from "react";
import MessageInput from "../MessageInput";
import MessageList from "../MessageList";
import ChatHeader from "../ChatHeader";
import "react-chat-elements/dist/main.css";
import styles from './style.module.css'

const member = {
  name: "Donald",
  picture: "https://loremflickr.com/45/45",
  lastActivityTime: Date.now(),
  // acuity: 0
}

export const Chat = () => {
  const [messages, setMessages] = useState([
    {
      avatar: "https://loremflickr.com/25/25",
      title: 'Elit magna',
      avatarFlexible: true,
      position: "left",
      type: "text",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      date: new Date(),
    },
  ]);

  const [typing, setTyping] = useState(false);

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
      <ChatHeader className={styles.header} dataSource={member} />
      <MessageList
        className={styles.messageList}
        dataSource={messages}
        isTyping={typing}
      ></MessageList>
      <MessageInput onSubmit={addMessage} />
    </div>
  );
};
