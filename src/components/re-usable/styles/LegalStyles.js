import styled from 'styled-components';

export const BodyText = styled.div`
  margin-bottom: 100px;

  p,
  b,
  li {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.5;
    margin: 15px 0px;
    font-size: 16px;
    color: #000000;
  }

  ul {
    list-style-position: inside;
    list-style-type: disc;
  }

  hr {
    margin: 30px 0px;
  }
`;

export const GreyLinkWithDots = styled.a`
  color: #808080;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
  margin: 15px 0px;
  font-size: 16px;
  border-bottom: dotted 3px #808080;
  text-decoration: none;

  &:hover {
    border-bottom: none;
  }
`;

export const MainPrivacyPointsBox = styled.ol`
  margin: 0px 30px;
`;

export const UpperText = styled.p`
  text-transform: uppercase;
`;

export const ListStyleAplha = styled.ul`
  list-style-type: upper-alpha !important;
`;

export const ListStyleRomanNum = styled.ul`
  list-style-type: lower-roman !important;
  margin: 0px 30px;
`;

export const BoxText = styled.p`
  border: 3px solid #000000;
  padding: 10px;
  font-style: oblique;
  font-weight: bold;
  margin: 30px 0px !important;
`;

export const MobileTableDiv = styled.div`
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LegalTableTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;

  td {
    font-family: Arial, Helvetica, sans-serif;
    padding: 5px;
    line-height: 1.5;
    font-size: 16px;
    border: 1px dotted;
  }
`;
