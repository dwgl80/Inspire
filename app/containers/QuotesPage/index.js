import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectFetching,
  makeSelectQuotes,
  makeSelectError,
} from 'containers/App/selectors';

import LinkButton from 'components/LinkButton/';
import messages from './messages';

import { getQuotes } from 'containers/App/actions';
// import reducer from './reducer';
import saga from './saga';

export class QuotesPage extends React.PureComponent {
  componentDidMount() {
    this.props.fetchAllQuotes();
  }

  render() {
    const { quotes } = this.props;
    console.log(quotes);
    const { link } = messages;
    return (
      <div>
        <LinkButton to="/">
          <FormattedMessage {...link} />
        </LinkButton>
      </div>
    );
  }
}

QuotesPage.propTypes = {
  fetchAllQuotes: PropTypes.func,
  quotes: PropTypes.array,
  error: PropTypes.bool,
};

const mapDispatchToProps = dispatch => ({
  fetchAllQuotes: () => {
    dispatch(getQuotes());
    console.log('fetched');
  },
});

const mapStateToProps = createStructuredSelector({
  fetching: makeSelectFetching,
  quotes: makeSelectQuotes,
  error: makeSelectError,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// const withReducer = injectReducer({ key: 'QuotesPage', reducer });
const withSaga = injectSaga({ key: 'QuotesPage', saga });

export default compose(
  // withReducer,
  withSaga,
  withConnect,
)(QuotesPage);
