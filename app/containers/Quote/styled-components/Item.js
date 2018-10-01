import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-left: 30px;
  color: ${props => (props.liked ? 'maroon' : 'PaleVioletRed')};
  cursor: pointer;
  transition: font 0.5s ease;

  &:hover {
    font-size: 25px;
  }
`;

export default Item;
