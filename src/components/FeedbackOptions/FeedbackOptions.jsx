import React from 'react';
import PropTypes from 'prop-types';
import { BtnDiv, Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ onLeaveFeedback }) => (
  <BtnDiv>
    <Button type="button" onClick={() => onLeaveFeedback('good')}>
      Good
    </Button>
    <Button type="button" onClick={() => onLeaveFeedback('neutral')}>
      Neutral
    </Button>
    <Button type="button" onClick={() => onLeaveFeedback('bad')}>
      Bad
    </Button>
  </BtnDiv>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
