import React from 'react';
import PropTypes from 'prop-types';

import Li from './Li';
import UL from './UL';
import Wrapper from './Wrapper';

const HomePageList = ({ quotes }) => (
  <Wrapper>
    <UL>{quotes.map((quote, index) => <Li key={index}>{quote}</Li>)}</UL>
  </Wrapper>
);

HomePageList.propTypes = {
  quotes: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default HomePageList;
