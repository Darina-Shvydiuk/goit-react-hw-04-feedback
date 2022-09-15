import s from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={s.list}>
      <li className={s.item}>Good:{good}</li>
      <li className={s.item}>Neutral:{neutral}</li>
      <li className={s.item}>Bad:{bad}</li>
      <li className={s.item}>Total:{total}</li>
      <li className={s.item}>
        Positive feedback:{positivePercentage ? positivePercentage : 0}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
