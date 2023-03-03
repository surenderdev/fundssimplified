import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import styled from 'styled-components';
import { useEffect } from 'react';
import AOS from 'aos';
import "./CompanyLeads.css"

import {
  ProfileContainer,
  ProfileBox,
  ImgBox,
  TextBox,
} from '../../re-usable/styles/ContentStyles';
import 'aos/dist/aos.css';

import surender from '../../../assets/imgs/surender.jpg';
import tejonath from '../../../assets/imgs/tejonath.jpeg';
import madhu from '../../../assets/imgs/madhu.jpg';
import abhishek from '../../../assets/imgs/abhishek.jpeg';
import gurunath from '../../../assets/imgs/gurunath.jpeg';

function CompanyLeads() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <H3Title>The Team</H3Title>
      <ProfileContainer data-aos='fade-up'>

        <ProfileBox>
          <ImgBox src={surender} />
          <LeadTextBox>
          <H3Title>   <p>Surender Varma</p> </H3Title>
            
            <p>Director, <br/> IT and Research</p>
            <br/>
                  
          </LeadTextBox>
          <div className='social-container d-flex justify-content-evenly'>
        
              <a href="https://in.linkedin.com/in/surender-varma-gadhiraju-721a368a.com" >
              <FontAwesomeIcon icon={faLinkedin}  size="lg" color="blue"/> 
              </a>
            
              <a href="https://facebbok.com" >
              <FontAwesomeIcon icon={faFacebook} size="lg" color="blue"/>
              </a>
          </div>
        </ProfileBox>

        <ProfileBox>
          <ImgBox src={madhu} />
          <LeadTextBox>
          <H3Title> <p>Madhu Menon</p></H3Title>
            <p>Director, <br/> Remittance Services </p>
           
          </LeadTextBox>
          <div className='social-container d-flex justify-content-evenly'>
        
            <a href="https://www.linkedin.com/in/madhu-menon-5a748314" >
            <FontAwesomeIcon icon={faLinkedin}  size="lg" color="blue"/> 
            </a>
          
            <a href="https://facebook.com" >
            <FontAwesomeIcon icon={faFacebook} size="lg" color="blue"/>
            </a>
          </div>
      
        </ProfileBox>
        <ProfileBox>
          <ImgBox src={tejonath} />
          <LeadTextBox>
          <H3Title> <p>Tejonath</p></H3Title>
            <p>Director,  <br/> Finance and  Compliance</p>
          </LeadTextBox>
          <div className='social-container d-flex justify-content-evenly'>
        
        <a href="https://www.linkedin.com/in/ca-tejonath-gunturu-a7b5791b" >
        <FontAwesomeIcon icon={faLinkedin}  size="lg" color="blue"/> 
        </a>
      
        <a href="https://facebook.com" >
        <FontAwesomeIcon icon={faFacebook} size="lg" color="blue"/>
        </a>
      </div>
        </ProfileBox>
        <ProfileBox>
          <ImgBox src={gurunath} />
          <LeadTextBox>
          <H3Title> <p>Gurunath</p></H3Title>
            <p>Mentor, <br/>Client Relationships</p>
          </LeadTextBox>
          <div className='social-container d-flex justify-content-evenly'>
        
            <a href="https://linkedin.com" >
            <FontAwesomeIcon icon={faLinkedin}  size="lg" color="blue"/> 
            </a>
          
            <a href="https://facbook.com" >
            <FontAwesomeIcon icon={faFacebook} size="lg" color="blue"/>
            </a>
       
          </div>
        </ProfileBox>

        <ProfileBox>
          <ImgBox src={abhishek} />
          <LeadTextBox>
          <H3Title> <p>Abhishek Kodilkar</p> </H3Title>
          <br/>
          <p>Consultant, <br/> Digital Technology</p>
          </LeadTextBox>
          <div className='social-container d-flex justify-content-evenly'>
        
        <a href="https://www.linkedin.com/mwlite/in/abhishekak" >
        <FontAwesomeIcon icon={faLinkedin}  size="lg" color="blue"/> 
        </a>
      
        <a href="https://facebook.com" >
        <FontAwesomeIcon icon={faFacebook} size="lg" color="blue"/>
        </a>

      </div>
      
       </ProfileBox>
        
      </ProfileContainer>
    </div>
  );
}

const H3Title = styled.h3`
  font-size: 50px;
  line-height: normal;
`;

const LeadTextBox = styled(TextBox)`
  padding: 25px !important;

  p {
    margin: 0px !important;
  }
`;

const LeftProfileBox = styled(ProfileBox)`
  justify-content: space-evenly;

  img {
    padding: 0px 10px;
  }

  ::before {
    transform: skewX(0deg);
    bottom: 0px;
    left: 0px;
  }

  &::after {
    transform: skewY(0deg);
    top: 0px;
    left: 0px;
  }

  &:hover::before {
    transform: skewX(-45deg);
    bottom: -15px;
    left: -8px;
  }

  &:hover&::after {
    right: 0px;
    top: 8px;
    transform: skewY(-45deg);
    left: -15px;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 100px;
  }
`;

const SocialBG = styled.a`
  background-color: #1a1a1a;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  padding: 10px;
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: row;
  -webkit-box-shadow: -5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: -5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  transition: transform 0.25s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  svg {
    font-size: 25px;
  }
`;

const allSocial = styled.div`
  background-color: #1a1a1a; 
  flex: 0 50%;
  flex-direction: row;
  margin-left: 100px ;
  justify-content: center;
  align-items: row;
  padding: 50px;
 
`;


export default CompanyLeads;
