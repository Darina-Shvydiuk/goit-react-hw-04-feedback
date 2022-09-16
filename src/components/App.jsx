import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { useState } from 'react';
// import { useReducer } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stateMap = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };
  const onLeaveFeedBack = state => {
    stateMap[state](prevState => prevState + 1);
  };

  // варіант через useReducer:
  // const options = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  // const optionsTags = Object.keys(options);
  // const reducer = (state, action) => {
  //   const { type, payload } = action;
  //   return { ...state, [type]: state[type] + payload };
  // };
  // const [{ good, bad, neutral }, dispatch] = useReducer(reducer, options);

  // const onLeaveFeedBack = state => {
  //   dispatch({ type: state, payload: 1 });
  // };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good) {
      return Math.round((good / countTotalFeedback()) * 100);
    }
  };

  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedBack={onLeaveFeedBack} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
