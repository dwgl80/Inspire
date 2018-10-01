import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import HomePageList from 'containers/HomePageList';
import ErrorPage from 'components/ErrorPage';
import Header from 'components/Header';
import { HomePage, mapDispatchToProps } from '../index';
import messages from '../messages';

describe('<HomePage />', () => {
  it('should render the page message', () => {
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
  it('should render ErrorPage component when an error occurs', () => {
    const renderedComponent = shallow(
      <HomePage location={{ pathname: '/' }} error />,
    );
    expect(renderedComponent.contains(<ErrorPage />)).toEqual(true);
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

      describe('onSubmitForm', () => {
        it('should be mapped to Component props', () => {
          const dispatch = jest.fn();
          const result = mapDispatchToProps(dispatch);
          expect(result.handleFormSubmit).toBeDefined();
        });
      });
    });
  });
});
