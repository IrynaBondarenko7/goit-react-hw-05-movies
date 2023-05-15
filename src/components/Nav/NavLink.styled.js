import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  background-color: #fff;
  padding: 5px 12px;
  border-radius: 5px;
  color: #239b56;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
