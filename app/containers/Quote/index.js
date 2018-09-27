import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Item from './Item';
import Wrapper from './Wrapper';

const Quote = ({ id, quote }) => (
  <Wrapper>
    <Item>{quote}</Item>
  </Wrapper>
);

export default Quote;
