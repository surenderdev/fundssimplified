import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import { useState, useEffect } from 'react';

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
    }
  }, [isMenuOpen]);

  return (
    <HamburgerMenuBox>
      <Menu right noOverlay isOpen={isMenuOpen}>
        <Link
          to='/'
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          HOME
        </Link>

        <Link
          to='/about'
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          ABOUT
        </Link>
        
        <Link
          to='/services'
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
        SERVICES
        </Link>

        <Link
          to='/contact'
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          CONTACT
        </Link>
        
      </Menu>
    </HamburgerMenuBox>
  );
}

const HamburgerMenuBox = styled.div`
  display: none;

  @media only screen and (max-width: 820px) {
    display: block;
  }
`;

export default HamburgerMenu;
