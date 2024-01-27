import React, { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback
          options={Object.keys(feedback)}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export { App };
