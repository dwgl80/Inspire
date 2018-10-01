import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 50px;
  text-align: center;
  font-family: URW Chancery L, cursive;
  color: ${props => (props.path === '/' ? 'SkyBlue' : 'PaleVioletRed')};
`;

export default H1;
