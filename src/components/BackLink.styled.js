import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledBackLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  gap: 5px;
  align-items: center;
  padding-bottom: 15px;
  padding-top: 15px;
  font-size: 20px;
  color: #212121;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #28b463;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
