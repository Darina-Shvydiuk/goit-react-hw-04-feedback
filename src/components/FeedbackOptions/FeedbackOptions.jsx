import s from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
  return (
    <ul className={s.list}>
      {options.map(option => (
        <li key={option} className={s.item}>
          <button
            className={s.btn}
            type="button"
            onClick={() => onLeaveFeedBack(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedBack: PropTypes.func.isRequired,
};
