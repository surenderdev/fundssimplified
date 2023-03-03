import { Helmet } from 'react-helmet';
import Services from '../components/page-components/services-components/Services';
import { NestedRootOther } from '../components/re-usable/NestedRoot';
import styled from 'styled-components';
import PageTitle from '../components/re-usable/PageTitle';


const servicestwoTitle = styled.h3`
  font-size: 60px;
  line-height: normal;
`;

const servicesTitle = styled.h2`
  font-size: 30px;
  line-height: normal;
`;


function Servicespage() {
  return (
    <NestedRootOther>
      
      <Helmet>
        <title>Funds Simplified | Services</title>
      </Helmet>
      <PageTitle>Services</PageTitle>
        <Services />
         
    </NestedRootOther>
  );
}

export default Servicespage;
