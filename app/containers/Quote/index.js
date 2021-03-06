import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Item from './styled-components/Item';
import Wrapper from './styled-components/Wrapper';
import Liked from './styled-components/Liked';

import { changeLiked } from './actions';

export const Quote = ({ id, quote, liked, toggleLiked }) => (
  <Wrapper>
    <Item onClick={() => toggleLiked(id)} liked={liked}>
      {quote}
      {liked && <Liked>Liked!</Liked>}
    </Item>
  </Wrapper>
);

Quote.propTypes = {
  id: PropTypes.number,
  quote: PropTypes.string,
  liked: PropTypes.bool,
  toggleLiked: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  toggleLiked: id => dispatch(changeLiked(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Quote);
