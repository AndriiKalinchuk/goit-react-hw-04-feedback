import React from 'react';
import PropTypes from 'prop-types';
import { BtnDiv, Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <BtnDiv>
    {options.map(option => {
      return (
        <Button
          key={option}
          type="button"
          value={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      );
    })}
  </BtnDiv>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
