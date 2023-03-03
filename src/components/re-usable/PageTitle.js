import styled from 'styled-components';

function PageTitle(props) {
  return <MainPageTitle>{props.children}</MainPageTitle>;
}

const MainPageTitle = styled.h1`
  color: #000000;
  font-size: 130px;
  line-height: 120px;
  border-bottom: 5px solid #000000;
  text-transform: uppercase;
  width: 100%;
  margin: 50px 0px;
  padding-bottom: 25px;
  word-break: break-word;

  @media only screen and (max-width: 820px) {
    font-size: 80px;
    line-height: 75px;
  }
`;

export default PageTitle;
