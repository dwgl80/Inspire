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

export default class QuotesPage extends React.PureComponent {
  componentDidMount() {
    console.log('hello!');
  }

  render() {
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

const mapDispatchToProps = dispatch => ({
  fetchAllQuotes: () => dispatch(getQuotes()),
});

const mapStateToProps = createStructuredSelector({
  fetching: makeSelectFetching,
  quotes: makeSelectQuotes,
  error: makeSelectError,
});
