// src/components/Header.jsx
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #1e1e2f;
  color: #ffffff;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  margin-left: 1rem;

  &:hover {
    color: #00bcd4;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>FocusTime</Logo>
      <Nav>
        <NavLink to="/timer">Timer</NavLink>
        <NavLink to="/stats">Stats</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        {/* <Route path="*" element={<h2>Page not found</h2>} /> */}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;