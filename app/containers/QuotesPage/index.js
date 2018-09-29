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
  makeSelectError,
  makeSelectLocation,
} from 'containers/App/selectors';

import QuotesPageList from 'containers/QuotesPageList';
import Header from 'components/Header';
import InputBar from 'components/InputBar';
import LinkButton from 'components/LinkButton';
import ErrorPage from 'components/ErrorPage';
import messages from './messages';

import { getQuotes } from 'containers/App/actions';
// import reducer from './reducer';
import saga from './saga';

export class QuotesPage extends React.PureComponent {
  componentDidMount() {
    this.props.fetchAllQuotes();
  }

  render() {
    const {
      error,
      location: { pathname },
      fetching,
    } = this.props;
    const { link, input } = messages;
    if (error) {
      return <ErrorPage />;
    } else if (fetching) {
      return <div>Retrieving data</div>;
    }
    return (
      <div>
        <Header path={pathname} />
        <InputBar input={input} />
        <QuotesPageList />
        <LinkButton to="/" path={pathname}>
          <FormattedMessage {...link} />
        </LinkButton>
      </div>
    );
  }
}

QuotesPage.propTypes = {
  fetchAllQuotes: PropTypes.func,
  error: PropTypes.bool,
  location: PropTypes.object,
  pathname: PropTypes.string,
  fetching: PropTypes.bool,
};

const mapDispatchToProps = dispatch => ({
  fetchAllQuotes: () => dispatch(getQuotes()),
});

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation,
  fetching: makeSelectFetching,
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
