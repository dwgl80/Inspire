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
import axios from 'axios';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

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
export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  componentDidMount() {
    axios
      .get('/saved/quotes/')
      .then(res => console.log('response from client', res))
      .catch(err => console.log('error in client', err));
  }

  handleFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
  }

  render() {
    const { title, input } = messages;
    return (
      <Section>
        <h3>
          <FormattedMessage {...title} />
        </h3>
        <Form
          action="/saved/quotes"
          method="post"
          onSubmit={this.handleFormSubmit}
        >
          <Label for="quote">
            <FormattedMessage {...input} />
            <Input
              type="text"
              name="quote"
              placeholder="Type Quote Here..."
              onChange={this.onInputChange}
            />
          </Label>
        </Form>
      </Section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleFormSubmit: event => {
    event.preventDefault();
    event.target.reset();
    dispatch(saveQuote());
  },
  onInputChange: event => dispatch(inputQuote(event.target.value)),
});

const withReducer = injectReducer({ key: 'HomePage', reducer });
const withSaga = injectSaga({ key: 'HomePage', saga });
