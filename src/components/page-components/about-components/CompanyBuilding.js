import { useEffect } from 'react';
import AOS from 'aos';
import styled from 'styled-components';

import {
  TwoBoxRow,
  TextBox,
  ImgBox,
} from '../../re-usable/styles/ContentStyles';
import 'aos/dist/aos.css';

import CompanyBuildingImg from '../../../assets/imgs/company-building.jpg';

function CompanyBuilding() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <TwoBoxRow data-aos='fade-up'>
      <CenterText>
        <H2Title>Funds Simplified</H2Title>
          <p>
          Be the funds to be invested <br/>
          Be the funds to be raised <br/>
          Be the funds that are to be freed from being stuck <br/>
          <br/>
  
          Be it anything about funds, that is covered under <br/> Indian sovereign laws, <br/>
          you can find digital solutions with us.

          </p>

      </CenterText>
      <ImgBox src={CompanyBuildingImg} height={400} width={300}/>
    </TwoBoxRow>
  );
}

const H2Title = styled.h2`
  font-size: 50px;
  line-height: normal;
`;

const CenterText = styled(TextBox)`
  text-align: center;
`;

export default CompanyBuilding;
