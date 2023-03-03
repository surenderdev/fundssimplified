import styled from 'styled-components';
// About Page
export const TwoBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 150px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px;

  p {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 1400px) {
    padding: 25px;
  }
`;

export const ImgBox = styled.img`
  width: 90%;
  height: 300px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 150px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ProfileBox = styled.div`
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.2);
  background-color: #f0ff00;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 35%;
  height: 100%;
  position: relative;
  padding: 10px;

  img {
    padding: 0px 10px;
  }

  &::before {
    content: '';
    background-color: #000000;
    position: absolute;
    height: 15px;
    width: 99%;
    bottom: 0px;
    left: 0px;
    transform: skewX(0deg);
    z-index: -1;
    transition: all 0.25s ease-in-out;
  }

  &::after {
    content: '';
    background-color: #000000;
    position: absolute;
    height: 100%;
    width: 15px;
    top: 0px;
    right: 0px;
    transform: skewY(0deg);
    z-index: -1;
    transition: all 0.25s ease-in-out;
  }

  &:hover::before {
    content: '';
    background-color: #000000;
    position: absolute;
    bottom: -15px;
    left: 8px;
    height: 15px;
    width: 100%;
    transform: skewX(45deg);
  }

  &:hover&::after {
    content: '';
    background-color: #000000;
    position: absolute;
    top: 8px;
    right: -15px;
    height: 100%;
    width: 15px;
    transform: skewY(45deg);
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 100px;
  }
`;

export const TwoBoxRowReverse = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 150px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const BGImageTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: calc(100% - 60px);
  margin: 30px !important;
  padding: 0px 100px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);

  p,
  svg {
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 1000px) {
    height: 100%;
    padding: 30px;
  }
`;

// Contact Page
export const ContactInfoBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: #000000;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 100px;
  }
`;

export const ContactFormBox = styled.div`
  width: 50%;
  height: 100%;

  form > * {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 1000px) {
    width: 75%;
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const ContactH2 = styled.h2`
  font-size: 60px;
  line-height: normal;
`;
