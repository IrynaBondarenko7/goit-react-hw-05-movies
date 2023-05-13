import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './Container/Container';
import { Header } from './Header/Header';
import { StyledNav } from './Nav/Nav.styled';
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <StyledNav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </StyledNav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
