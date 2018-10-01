import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import HomePageList from 'containers/HomePageList';
import ErrorMessage from 'components/ErrorMessage';
import Header from 'components/Header';
import { saveQuote } from 'containers/App/actions';
import { inputQuote } from '../actions';
import { HomePage, mapDispatchToProps } from '../index';
import messages from '../messages';

describe('<HomePage />', () => {
  it('should render the page title', () => {
    const renderedComponent = shallow(
      <HomePage location={{ pathname: '/' }} />,
    );
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.title} />),
    ).toEqual(true);
  });
  it('should render HomePageList component', () => {
    const renderedComponent = shallow(
      <HomePage location={{ pathname: '/' }} />,
    );
    expect(renderedComponent.contains(<HomePageList />)).toEqual(true);
  });
  it('should render ErrorMessage component when an error occurs', () => {
    const renderedComponent = shallow(
      <HomePage location={{ pathname: '/' }} error />,
    );
    expect(renderedComponent.contains(<ErrorMessage />)).toEqual(true);
  });
  it('should render Header component', () => {
    const renderedComponent = shallow(
      <HomePage location={{ pathname: '/' }} />,
    );
    expect(renderedComponent.contains(<Header path="/" />)).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onInputChange', () => {
      it('should be mapped to Component props', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onInputChange).toBeDefined();
      });
      it('should dispatch inputQuote when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const quote = 'shoot for the moon and the stars';
        result.onInputChange({ target: { value: quote } });
        expect(dispatch).toHaveBeenCalledWith(inputQuote(quote));
      });

      describe('handleFormSubmit', () => {
        it('should be mapped to Component props', () => {
          const dispatch = jest.fn();
          const result = mapDispatchToProps(dispatch);
          expect(result.handleFormSubmit).toBeDefined();
        });
        it('should dispatch saveQuote when called', () => {
          const dispatch = jest.fn();
          const preventDefault = jest.fn();
          const target = { reset: () => {} };
          const result = mapDispatchToProps(dispatch);
          const event = { preventDefault, target };
          result.handleFormSubmit(event);
          expect(dispatch).toHaveBeenCalledWith(saveQuote());
        });

        it('should preventDefault if called with event', () => {
          const preventDefault = jest.fn();
          const target = { reset: () => {} };
          const result = mapDispatchToProps(() => {});
          const event = { preventDefault, target };
          result.handleFormSubmit(event);
          expect(preventDefault).toHaveBeenCalledWith();
        });
      });
    });
  });
});
