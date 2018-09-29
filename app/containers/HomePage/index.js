import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectSaving,
  makeSelectRecentlySaved,
  makeSelectError,
  makeSelectLocation,
} from 'containers/App/selectors';

import HomePageList from 'containers/HomePageList';
import Header from 'components/Header';

import InputBar from 'components/InputBar';
import LinkButton from 'components/LinkButton/';
import ErrorPage from 'components/ErrorPage';
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
  const { title, input, save, link } = messages;
  if (error) {
    return <ErrorPage />;
  }
  return (
    <Section>
      <Header path={pathname} />
      {saving && <FormattedMessage {...save} />}
      <h3>
        <FormattedMessage {...title} />
      </h3>
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

const mapDispatchToProps = dispatch => ({
  handleFormSubmit: event => {
    event.preventDefault();
    event.target.reset();
    dispatch(saveQuote());
  },
  onInputChange: event => dispatch(inputQuote(event.target.value)),
});

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation,
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
