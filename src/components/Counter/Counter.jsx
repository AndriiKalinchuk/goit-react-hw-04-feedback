import React, { Component } from 'react';

export default class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodBtn = () => {
    this.setState((state, props) => ({
      good: state.good + props.step,
    }));
  };

  handleNeutralBtn = () => {
    this.setState((state, props) => ({
      neutral: state.neutral + props.step,
    }));
  };

  handleBadBtn = () => {
    this.setState((state, props) => ({
      bad: state.bad + props.step,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good * 100) / total) : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <p>Please leave feedback</p>
        <button type="button" onClick={this.handleGoodBtn}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutralBtn}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBadBtn}>
          Bad
        </button>
        <ul>Statistics</ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {this.countTotalFeedback()}</li>
        <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
      </div>
    );
  }
}
