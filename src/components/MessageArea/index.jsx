import { Buble } from '../Buble';
import PropTypes from 'prop-types';
// import "react-chat-elements/dist/main.css";
import style from './style.module.scss'
import { useRef, useEffect } from 'react';

export const MessageArea = ({ isTyping = false, className, dataSource }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }, [dataSource]);
  
  const classNames = `${className} ${style.background}`
  return (
    <div className={classNames}>
      {dataSource.map((item, id) => <Buble key={id} data={item} />)}

      <div data-testid="isTyping" className={style.background}>{isTyping && '...'}</div>
      <div ref={ref}></div>
    </div>
  );
};

MessageArea.propTypes = {
  isTyping: PropTypes.bool,
  dataSource: PropTypes.array.isRequired

}
