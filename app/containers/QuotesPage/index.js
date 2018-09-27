import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

export default class QuotesPage extends React.PureComponent {
  componentDidMount() {}

  render() {
    return <div>hello!</div>;
  }
}
