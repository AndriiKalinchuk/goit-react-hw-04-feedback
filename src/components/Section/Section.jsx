import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrapper } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionWrapper>
    <h2>{title}</h2>
    {children}
  </SectionWrapper>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Section;

