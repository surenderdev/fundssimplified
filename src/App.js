import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/re-usable/Layout';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Services = React.lazy(() => import('./pages/Servicespage'));
const Iepfpage = React.lazy(() => import('./pages/Iepfpage'));

const NoPage = React.lazy(() => import('./pages/NoPage'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='contact' element={<Contact />} />
        <Route path='iepf' element={<Iepfpage />} />
        <Route path='*' element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
