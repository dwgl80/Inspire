import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Form from './Form';
import Input from './Input';
import Label from './Label';

const InputBar = ({ handleFormSubmit, onInputChange, input }) => (
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
  </Form>
);

InputBar.propTypes = {
  handleFormSubmit: PropTypes.func,
  onInputChange: PropTypes.func,
  input: PropTypes.object,
};

export default InputBar;
