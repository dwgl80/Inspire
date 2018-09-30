import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectRecentlySaved } from 'containers/App/selectors';

import Li from './styled-components/Li';
import UL from './styled-components/UL';
import Wrapper from './styled-components/Wrapper';

export const HomePageList = ({ quotes }) => (
  <Wrapper>
    <UL>{quotes.map((quote, index) => <Li key={index}>{quote}</Li>)}</UL>
  </Wrapper>
);

HomePageList.propTypes = {
  quotes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = createStructuredSelector({
  quotes: selectRecentlySaved,
});

export default connect(
  mapStateToProps,
  null,
)(HomePageList);
