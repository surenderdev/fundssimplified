import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from './navbar/NavBar';
import StickySocials from './sticky-socials/StickySocials';
import Footer from './footer/Footer';
import LoadingSpinner from './LoadingSpinner';

function Layout() {
  return (
    <div>
      <Suspense
        fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }
      >
        <NavBar />
        <StickySocials />
        <Outlet />
        <Footer />
      </Suspense>
    </div>
  );
}

export default Layout;
