import { useEffect } from 'react';
import AOS from 'aos';
import styled from 'styled-components';

import NestedRoot from '../../../re-usable/NestedRoot';
import 'aos/dist/aos.css';

import bgImage from '../../../../assets/imgs/mainbg1.jpg';

function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BigImage>
      <NestedRoot>
        <MiddleText data-aos='fade-up'>
           <h1>FUNDS SIMPLIFIED</h1>
           <p>Digital Bridge Between You and Funds</p>
          <MainButt>
            <ButtDiv>
              <ButtOverlay></ButtOverlay>
              <p>Register</p>
            </ButtDiv>
          </MainButt>
        </MiddleText>
      </NestedRoot>
    </BigImage>
  );
}

const BigImage = styled.div`
  background-image: url(${bgImage});
  opacity: 0.85;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  }
 
`;


const MiddleText = styled.div`
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: #FFFFFF;
  text-align: center;
    
  p {
    font-size: 50px;
    line-height: normal;
    color: #FFFFFF;
  }

  h1 {
    font-family: 'Bebas Neue', cursive;
    font-size: 7rem;
    line-height: 200px;
    text-align: center;
    margin: 10px auto;
    color: #FFFFFF;
  }

  @media only screen and (max-width: 820px) {
    p {
      font-size: 22px;
      }
    h1 {
      font-size: 3.2rem;
      line-height: 130px;
    }
  }
`;

const buttWidth = 250;
const MainButt = styled.button`
  position: relative;
  width: auto;
  min-width: ${buttWidth}px;
  background: none;
  border: 0;
  font-size: 35px;
  padding: 10px;

  &::before {
    content: '';
    position: absolute;
    display: block;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 25px;
    border: 1px solid #ffffff;
    border-bottom: 0;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 25px;
    border: 1px solid #ffffff;
    border-top: 0;
  }

  &:hover span {
    transform: translateX(-10%) skew(-10deg);
  }

  p {
    position: relative;
    z-index: 2;
    color: #000000;
    transition: color 0.75s ease-in-out;
  }

  &:hover p {
    color: #ffffff;
  }
`;

const ButtDiv = styled.div`
  overflow: hidden;
  position: relative;
  cursor: pointer;
  text-align: center;
  background-color: #f0ff00;
`;

const ButtOverlay = styled.span`
  content: '';
  z-index: 1;
  position: absolute;
  display: block;
  height: 100%;
  width: 110%;
  top: 0;
  background-color: #3b4339;
  cursor: pointer;
  transform: translateX(-110%) skew(-10deg);
  transition: all 0.5s ease-in-out;
`;

export default HeroSection;
