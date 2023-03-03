import RegisterButton from '../../re-usable/navbar/RegisterButton';

import {
  ContactH2,
  ContactInfoBox,
} from '../../re-usable/styles/ContentStyles';

function ContactInfo() {
  const testing = (e) => {
    alert(
      'This would take you to the companies Google My Business Page to leave a review.'
    );
  };

  return (
    <ContactInfoBox>
      <ContactH2>Funds Simplified</ContactH2>
      <a
        href='https://goo.gl/maps/PYbqkYZEMCrkLVU27'
        target='_blank'
        rel='noreferrer'
      >
        Sai Dwarakamai Complex, Flat 401
        <br />
        Hitension Road, Above  Medplus
        <br />
        Mithra Hills, Hydernagar, Nizampet
        <br />
        Hyderabad, Telangana - 500090
      </a>
      <a href='tel:7660888898'>91-7660888898</a>
      <RegisterButton onClick={testing} href='#'>
        Leave your message
      </RegisterButton>
    </ContactInfoBox>
  );
}

export default ContactInfo;
