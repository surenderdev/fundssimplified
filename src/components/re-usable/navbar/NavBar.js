import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import NavMenu from './NavMenu';
import HamburgerMenu from './HamburgerMenu';
import RegisterButton from './RegisterButton';

function NavBar() {
  return (
    <NavBarBox>
      <LogoMenu>
        <Link to='/'>
          <HoverLogo />
        </Link>
        <NavMenu />
      </LogoMenu>
      <RegisterButton href='#'>Register</RegisterButton>
      <HamburgerMenu />
    </NavBarBox>
  );
}

const NavBarBox = styled.div`
  background-color: #0096ff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 50px;
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 9999;

  @media only screen and (max-width: 900px) {
    svg {
      display: none;
    }
  }
`;

const LogoMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding : 0 10px 0 10px;
  width: 40%;
  margin: 20px;
`;

const HoverLogo = styled(Logo)`
  filter: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    filter: drop-shadow(0px 0px 2px #ffffff);
  }
`;

export default NavBar;
