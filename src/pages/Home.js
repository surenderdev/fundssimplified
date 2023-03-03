import { Helmet } from 'react-helmet';

import HeroSection from '../components/page-components/home-components/hero-section/HeroSection';
import Services from '../components/page-components/services-components/Services';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Funds Simplified | Home</title>
      </Helmet>
      <HeroSection />
      <Services />
      
    </div>
  );
}

export default Home;
