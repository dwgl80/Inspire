import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';

import Item from './Item';
import Wrapper from './Wrapper';

import { changeLiked } from './actions';
import reducer from './reducer';

export const Quote = ({ id, quote, liked, toggleLiked }) => {
  console.log(liked);
  return (
    <Wrapper>
      <Item onClick={() => toggleLiked(id)}>{quote}</Item>
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleLiked: id => dispatch(changeLiked(id)),
});

// const withConnect = connect(
//   null,
//   mapDispatchToProps,
// );

export default connect(
  null,
  mapDispatchToProps,
)(Quote);
