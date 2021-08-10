import PropTypes from "prop-types";
import styles from './style.module.css'

export const Avatar = ({ picture, name }) => <div className={styles.avatar}>
    <img className={styles.img} src={picture} alt={name} />
</div>;

Avatar.propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string
}