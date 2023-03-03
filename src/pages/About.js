import { Helmet } from 'react-helmet';

import PageTitle from '../components/re-usable/PageTitle';
import CompanyBuilding from '../components/page-components/about-components/CompanyBuilding';
import CompanyLeads from '../components/page-components/about-components/CompanyLeads';
import { NestedRootOther } from '../components/re-usable/NestedRoot';

function About() {
  return (
    <NestedRootOther>
      <Helmet>
        <title>Funds Simplified | About</title>
      </Helmet>
      <PageTitle>About</PageTitle>
      <CompanyBuilding />
      <CompanyLeads />
    </NestedRootOther>
  );
}

export default About;
