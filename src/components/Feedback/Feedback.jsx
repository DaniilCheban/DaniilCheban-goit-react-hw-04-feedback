import React, { Component } from 'react';

const Feedback = ({ optionss, onLeaveFeedback }) => {
  return (
    <div>
      {optionss.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export { Feedback };
