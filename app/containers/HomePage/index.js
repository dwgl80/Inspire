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
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Section from './styled-components/Section';
import Form from './styled-components/Form';
import Label from './styled-components/Label';
import Input from './styled-components/Input';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  componentDidMount() {
    console.log('hi');
  }
  render() {
    const { title, input } = messages;
    return (
      <Section>
        <h3>
          <FormattedMessage {...title} />
        </h3>
        <Form>
          <Label for="quote">
            <FormattedMessage {...input} />
            <Input
              type="text"
              name="input_quote"
              placeholder="Type Quote Here..."
            />
          </Label>
        </Form>
      </Section>
    );
  }
}
