import { useState } from "react";
import { planeImage } from "../../helpers/constants";
import PropTypes from "prop-types";
import style from "./style.module.css";

const MessageInput = ({ onSubmit, onChange }) => {
  const [msg, setMsg] = useState("");
  const submitForm = (event) => {
    event.preventDefault();
    if (!msg.length) return;
    onSubmit(msg);
    setMsg("");
  };

  const changeInput = (event) => {
    setMsg(event.target.value);
    onChange && onChange(event.target.value);
  };

  return (
    <form onSubmit={submitForm} className={style.inputForm} >
      <input
        className={style.text}
        placeholder="Type here..."
        multiline="false"
        value={msg}
        onChange={changeInput}
      />
      {/* <input
        color="white"
        backgroundColor="black"
        value="Send"
        type="submit"
        disabled={msg.length < 1}
      /> */}
      <img src={planeImage} onClick={submitForm} alt="send" className={style.sendImage} />
    </form>
  );
};

MessageInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};

export default MessageInput;
