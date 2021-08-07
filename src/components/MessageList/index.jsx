import { Fragment } from "react";
import { MessageList as RCEMessageList } from "react-chat-elements";
import PropTypes from 'prop-types';

const MessageList = ({ isTyping = false, ...props }) => {
  return (
    <Fragment>
      <RCEMessageList {...props}></RCEMessageList>
      <div className="message-list-typing-indicator">{isTyping && '...'}</div>
    </Fragment>
  );
};

MessageList.propTypes = {
  isTyping: PropTypes.bool,
  dataSource: PropTypes.array.isRequired
  
}

export default MessageList;