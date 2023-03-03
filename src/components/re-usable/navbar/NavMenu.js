import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function NavMenu() {
  return (
    <Nav>
      <MenuCircle></MenuCircle>
      <NavUl>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/about'>ABOUT</Link>
        </li>
        <li>
          <Link to='/services'>SERVICES</Link>
        </li>
        <li>
          <Link to='/contact'>CONTACT</Link>
        </li>
      </NavUl>
    </Nav>
  );
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: 50px;

  @media only screen and (max-width: 820px) {
    display: none;
  }
`;

const NavUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width:200px; 

  a {
    font-size: 36px;
    padding : 0 10px; 
  }

  a:hover {
    text-decoration: underline;
  }
`;

const MenuCircle = styled.div`
  background-color: #f0ff00;
  border-radius: 40%;
  width: 100px;
  height: 100px;
  position: relative;
  animation: ${rotate} 0.5s linear infinite;
  display: none;

  &:before {
    content: '';
    position: absolute;
    transform: rotate(30deg);
    width: 25px;
    height: 2px;
    background-color: #ffffff;
    left: 20px;
    top: 25px;
  }

  &:after {
    content: '';
    position: absolute;
    transform: rotate(-30deg);
    width: 25px;
    height: 2px;
    background-color: #ffffff;
    left: 20px;
    top: 37px;
  }
`;

export default NavMenu;
