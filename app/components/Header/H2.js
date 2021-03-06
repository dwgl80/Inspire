import styled from 'styled-components';

const H2 = styled.h2`
  font-size: 25px;
  text-align: center;
  font-family: URW Chancery L, cursive;
  margin-top: -25px;
  margin-bottom: 60px;
  color: ${props => (props.path === '/' ? 'SkyBlue' : 'PaleVioletRed')};
`;

export default H2;
