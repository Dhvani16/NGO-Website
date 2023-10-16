import React from 'react';
import PropTypes from 'prop-types';
import './FundraisingProgressBar.css';

const FundraisingProgressBar = ({ raisedAmount, goalAmount }) => {
  // Calculate the percentage of funds raised
  const progress = (raisedAmount / goalAmount) * 100;

  return (
    <div id='FundraisingProgressBar'>
      <div className="fundraising-progress-bar">
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="progress-info">
          <span>
            Raised: ${raisedAmount} of ${goalAmount}
          </span>
          <span>{progress.toFixed(2)}%</span>
        </div>
      </div>
    </div>
  );
};

FundraisingProgressBar.propTypes = {
  raisedAmount: PropTypes.number.isRequired,
  goalAmount: PropTypes.number.isRequired,
};

export default FundraisingProgressBar;




