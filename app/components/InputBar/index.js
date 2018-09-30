import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Section from './Section';
import Form from './Form';
import Input from './Input';
import Label from './Label';

const InputBar = ({ handleFormSubmit, onInputChange, input, query }) => (
  <Section>
    <Form
      action="/saved/quotes"
      method="post"
      onSubmit={event => handleFormSubmit(event, query)}
    >
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
  </Section>
);

InputBar.propTypes = {
  handleFormSubmit: PropTypes.func,
  onInputChange: PropTypes.func,
  input: PropTypes.object,
};

export default InputBar;
