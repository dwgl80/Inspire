import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkButton = styled(Link)`
  float: right;
  padding: 5px 30px;
  margin: 10px;
  text-decoration: none;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: URW Chancery L, cursive;
  font-weight: bold;
  font-size: 16px;
  border: ${props =>
    props.path === '/' ? '2px solid SkyBlue' : '2px solid PaleVioletRed'};
  color: ${props => (props.path === '/' ? 'SkyBlue' : 'PaleVioletRed')};

  &:hover {
    background: ${props => (props.path === '/' ? 'SkyBlue' : 'PaleVioletRed')};
    color: #fff;
  }
`;

export default LinkButton;
