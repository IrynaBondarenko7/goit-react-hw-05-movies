import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './Container';
import { Header } from './Header';
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
