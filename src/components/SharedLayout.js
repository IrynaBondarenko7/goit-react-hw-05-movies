import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './Container/Container';
import { Header } from './Header/Header';
import { StyledNav } from './Nav/Nav.styled';
import { StyledNavLink } from './Nav/NavLink.styled';
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </StyledNav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
