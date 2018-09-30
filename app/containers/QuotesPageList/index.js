import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectQuotes, selectSearchedQuotes } from 'containers/App/selectors';

import Quote from 'containers/Quote';
import Wrapper from './Wrapper';

export const QuotesPageList = ({ quotes, searchedQuotes }) => {
  const displayed = searchedQuotes.length ? searchedQuotes : quotes;
  return (
    <Wrapper>
      {displayed.map(item => (
        <Quote
          key={item.id}
          id={item.id}
          quote={item.quote}
          liked={item.liked}
        />
      ))}
    </Wrapper>
  );
};

QuotesPageList.propTypes = {
  quotes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  searchedQuotes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = createStructuredSelector({
  quotes: selectQuotes,
  searchedQuotes: selectSearchedQuotes,
});

export default connect(
  mapStateToProps,
  null,
)(QuotesPageList);
