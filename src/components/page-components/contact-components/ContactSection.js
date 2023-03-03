import { useEffect } from 'react';
import AOS from 'aos';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

import { TwoBoxRow } from '../../re-usable/styles/ContentStyles';
import 'aos/dist/aos.css';

function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <TwoBoxRow data-aos='fade-up'>
      <ContactInfo />
      <ContactForm />
    </TwoBoxRow>
  );
}

export default ContactSection;
