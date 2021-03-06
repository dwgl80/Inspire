import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  selectSaving,
  selectRecentlySaved,
  selectError,
  selectLocation,
} from 'containers/App/selectors';

import HomePageList from 'containers/HomePageList';
import Header from 'components/Header';

import InputBar from 'components/InputBar';
import LinkButton from 'components/LinkButton/';
import ErrorMessage from 'components/ErrorMessage';
import messages from './messages';
import Section from '../../components/InputBar/Section';

import { saveQuote } from 'containers/App/actions';
import { inputQuote } from './actions';
import reducer from './reducer';
import saga from './saga';

export const HomePage = props => {
  const {
    handleFormSubmit,
    onInputChange,
    saving,
    error,
    location: { pathname },
  } = props;
  const { title, input, save, link, invalid } = messages;
  return (
    <Section>
      <Header path={pathname} />
      {saving && <FormattedMessage {...save} />}
      <h3>
        <FormattedMessage {...title} />
      </h3>
      {error && <ErrorMessage message={invalid} />}
      <InputBar
        handleFormSubmit={handleFormSubmit}
        onInputChange={onInputChange}
        input={input}
      />
      <HomePageList />
      <LinkButton to="/quotes" path={pathname}>
        <FormattedMessage {...link} />
      </LinkButton>
    </Section>
  );
};

HomePage.propTypes = {
  handleFormSubmit: PropTypes.func,
  onInputChange: PropTypes.func,
  saving: PropTypes.bool,
  error: PropTypes.bool,
  location: PropTypes.object,
  pathname: PropTypes.string,
  recentlySaved: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export const mapDispatchToProps = dispatch => ({
  handleFormSubmit: event => {
    event.preventDefault();
    event.target.reset();
    dispatch(saveQuote());
    dispatch(inputQuote(''));
  },
  onInputChange: event => dispatch(inputQuote(event.target.value)),
});

const mapStateToProps = createStructuredSelector({
  location: selectLocation,
  saving: selectSaving,
  recentlySaved: selectRecentlySaved,
  error: selectError,
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
