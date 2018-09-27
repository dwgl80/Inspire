import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectQuotes } from 'containers/App/selectors';

import Wrapper from './Wrapper';

export const QuotesPageList = ({ quotes }) => (
  <Wrapper>{quotes.map(quote => <div>{quote}</div>)}</Wrapper>
);

QuotesPageList.propTypes = {
  quotes: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  quotes: makeSelectQuotes,
});

export default connect(
  mapStateToProps,
  null,
)(QuotesPageList);
