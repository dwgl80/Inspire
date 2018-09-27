/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import axios from 'axios';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectSaving,
  makeSelectRecentlySaved,
  makeSelectError,
} from 'containers/App/selectors';

import HomePageList from 'components/HomePageList';
import LinkButton from 'components/LinkButton/';
import ErrorPage from 'components/ErrorPage';
import messages from './messages';
import Section from './styled-components/Section';
import Form from './styled-components/Form';
import Label from './styled-components/Label';
import Input from './styled-components/Input';

import { saveQuote } from 'containers/App/actions';
import { inputQuote } from './actions';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  // componentDidMount() {
  //   axios
  //     .get('/saved/quotes/')
  //     .then(res => console.log('response from client', res))
  //     .catch(err => console.log('error in client', err));
  // }

  render() {
    const {
      handleFormSubmit,
      onInputChange,
      recentlySaved,
      saving,
      error,
    } = this.props;
    const { title, input, save, link } = messages;
    if (error) {
      return <ErrorPage />;
    }
    return (
      <Section>
        {saving && <FormattedMessage {...save} />}
        <h3>
          <FormattedMessage {...title} />
        </h3>
        <Form action="/saved/quotes" method="post" onSubmit={handleFormSubmit}>
          <Label for="quote">
            <FormattedMessage {...input} />
            <Input
              type="text"
              name="quote"
              placeholder="Type Quote Here..."
              onChange={onInputChange}
            />
          </Label>
          <HomePageList quotes={recentlySaved} />
        </Form>
        <LinkButton to="/quotes">
          <FormattedMessage {...link} />
        </LinkButton>
      </Section>
    );
  }
}

HomePage.propTypes = {
  saving: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  recentlySaved: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  handleFormSubmit: PropTypes.func,
  onInputChange: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  handleFormSubmit: event => {
    event.preventDefault();
    event.target.reset();
    dispatch(saveQuote());
  },
  onInputChange: event => dispatch(inputQuote(event.target.value)),
});

const mapStateToProps = createStructuredSelector({
  saving: makeSelectSaving,
  recentlySaved: makeSelectRecentlySaved,
  error: makeSelectError,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'HomePage', reducer });
const withSaga = injectSaga({ key: 'HomePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
