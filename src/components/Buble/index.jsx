import PropTypes from 'prop-types';
import { format } from 'timeago.js';
import { Avatar } from '../Avatar';
import style from './style.module.scss';

export const Buble = ({ data }) => {
    const { avatar, title, text, date, position } = data;

    const justifyPositionString = `justify-${position}`;
    const bubleStyles = `${style.message} ${style[position]}`;
    const componentStyles = `${style.buble} ${style[justifyPositionString]}`

    return (<div className={componentStyles} >
        {avatar && <Avatar picture={avatar} name={title} className={style.avatar} />}
        <div className={style.rightWrapper}>
            <div className={bubleStyles} data-testid='text'>{text}</div>
            <div className={style.subline}>
                {title && <div className={style.title} data-testid='title'>{title}</div>}
                {title && <div>&nbsp;-&nbsp;</div>}
                <div className={style.date} data-testid='date'>{format(date)}</div>
            </div>
        </div>
    </div>)
}

Buble.propTypes = {
    data: PropTypes.shape({
        picture: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
        position: PropTypes.oneOf(['left', 'right']).isRequired
    })
}