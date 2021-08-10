import PropTypes from "prop-types";

import {Avatar} from '../Avatar';

import styles from "./style.module.css";

export const ChatHeader = ({ name, picture }) => {
  return (
    <div className={styles.chatHeader}>
      <Avatar
        picture={picture}
        name={"logo"}
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
