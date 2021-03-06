import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  selectFetching,
  selectError,
  selectLocation,
} from 'containers/App/selectors';

import QuotesPageList from 'containers/QuotesPageList';
import Header from 'components/Header';
import InputBar from 'components/InputBar';
import LinkButton from 'components/LinkButton';
import ErrorMessage from 'components/ErrorMessage';
import messages from './messages';

import { getQuotes, searchQuotes } from 'containers/App/actions';
import { selectQuery } from './selector';
import { inputSearch } from './actions';
import reducer from './reducer';
import saga from './saga';

export class QuotesPage extends React.PureComponent {
  componentDidMount() {
    this.props.fetchAllQuotes();
  }

  render() {
    const {
      handleSearchSubmit,
      handleSearchTerm,
      error,
      location: { pathname },
      fetching,
      query,
    } = this.props;
    const { link, input, unable } = messages;
    if (error) {
      return <ErrorMessage message={unable} />;
    } else if (fetching) {
      return <div>Retrieving data</div>;
    }
    return (
      <div>
        <Header path={pathname} />
        <InputBar
          handleFormSubmit={handleSearchSubmit}
          onInputChange={handleSearchTerm}
          input={input}
          query={query}
        />
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
  handleSearchSubmit: PropTypes.func,
  handleSearchTerm: PropTypes.func,
  error: PropTypes.bool,
  location: PropTypes.object,
  pathname: PropTypes.string,
  fetching: PropTypes.bool,
  query: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  fetchAllQuotes: () => dispatch(getQuotes()),
  handleSearchSubmit: (event, query) => {
    event.preventDefault();
    event.target.reset();
    dispatch(searchQuotes(query));
  },
  handleSearchTerm: event => dispatch(inputSearch(event.target.value)),
});

const mapStateToProps = createStructuredSelector({
  location: selectLocation,
  fetching: selectFetching,
  error: selectError,
  query: selectQuery,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'QuotesPage', reducer });
const withSaga = injectSaga({ key: 'QuotesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(QuotesPage);
