import { Fragment } from "react";
import { MessageList as RCEMessageList } from "react-chat-elements";
import PropTypes from 'prop-types';
import "react-chat-elements/dist/main.css";
import style from './style.module.css'

export const MessageList = ({ isTyping = false, className, ...props }) => {
  const classNames = `${className} ${style.background}`
  return (
    <Fragment>
      <RCEMessageList className={classNames} {...props}></RCEMessageList>
      <div data-testid="isTyping" className={style.background}>{isTyping && '...'}</div>
    </Fragment>
  );
};

MessageList.propTypes = {
  isTyping: PropTypes.bool,
  dataSource: PropTypes.array.isRequired
  
}
