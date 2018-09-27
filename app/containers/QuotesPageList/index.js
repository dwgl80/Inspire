import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectQuotes } from 'containers/App/selectors';

import Quote from 'containers/Quote';
import Wrapper from './Wrapper';

export const QuotesPageList = ({ quotes }) => (
  <Wrapper>
    {quotes.map(item => (
      <Quote key={item.id} id={item.id} quote={item.quote} />
    ))}
  </Wrapper>
);

QuotesPageList.propTypes = {
  quotes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = createStructuredSelector({
  quotes: makeSelectQuotes,
});

export default connect(
  mapStateToProps,
  null,
)(QuotesPageList);
