import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { NestedStyle } from './../NestedRoot';
import Logofooter from '../Logofooter';
import FooterSocials from './FooterSocials';

function Footer() {
  return (
    <Root>
      <NestedRootFooter>
        <Link to='/'>
          <HoverLogo />
        </Link>
        <Copyright>
          &copy; 2023 Funds Simplified and any associated logos,
          trademarks, service marks etc. are property of company.
        </Copyright>
        <FooterSocials />
        <Copyright>
        Sai Dwarakamai Complex, Flat 401
        <br />
        Hitension Road, Above  Medplus
        <br />
        Mithra Hills, Hydernagar, Nizampet
        <br />
        Hyderabad, Telangana - 500090
        <br />
        Contact Mobile:
        <br />
        <a href='tel:7660888898'>91-7660888898</a>
        </Copyright>
      
      </NestedRootFooter>
    </Root>
  );
}

const Root = styled.div`
  background-color: #404040;
  color: #ffffff;
  width: 100%;
  height: 500px;

  @media only screen and (max-width: 900px) {
    height: 750px;
    padding: 50px 0px;
  }
`;

const NestedRootFooter = styled(NestedStyle)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 100%;
`;

const HoverLogo = styled(Logofooter)`
  filter: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    filter: drop-shadow(0px 0px 2px #ffffff);
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: #7e7e7e;
`;

export default Footer;
