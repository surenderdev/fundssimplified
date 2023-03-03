import { Helmet } from 'react-helmet';

import PageTitle from '../components/re-usable/PageTitle';
import ContactSection from '../components/page-components/contact-components/ContactSection';

import { NestedRootOther } from '../components/re-usable/NestedRoot';

function Iepfpage() {
  return (
    <NestedRootOther>
      <Helmet>
        <title>Funds Simplified | Iepf</title>
      </Helmet>
      <PageTitle>Contact</PageTitle>
      <ContactSection />
    </NestedRootOther>
  );
}

export default Iepfpage;

