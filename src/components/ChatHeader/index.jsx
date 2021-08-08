import { Avatar } from "react-chat-elements";
import PropTypes from "prop-types";

import styles from "./style.module.css";

export const ChatHeader = ({ name, picture }) => {
  return (
    <div className={styles.chatHeader}>
      <Avatar
        src={picture}
        alt={"logo"}
        size="large"
        type="circle flexible"
      />
      <div data-testid="name" className={styles.chatHeadeName}>
        {name}
      </div>
    </div>
  );
};

ChatHeader.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
