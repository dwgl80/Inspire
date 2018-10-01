import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Error from './Error';

const ErrorMessage = ({ message }) => (
  <Error>
    <FormattedMessage {...message} />
  </Error>
);

ErrorMessage.propTypes = {
  message: PropTypes.object,
};

export default ErrorMessage;
