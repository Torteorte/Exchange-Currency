import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Change = styled.div`
  text-align: center;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  margin: 10px auto;
  padding: 10px 20px;
  font-size: 18px;
  text-decoration: none;
  border-radius: 5px;
  color: #282727;
  background-color: #a0d6ef;
  border: 1px solid rgba(169, 169, 169, 0.5);
`;
