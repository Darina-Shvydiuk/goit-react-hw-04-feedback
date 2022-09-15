import s from '../Notification/Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p className={s.message}>{message}</p>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
