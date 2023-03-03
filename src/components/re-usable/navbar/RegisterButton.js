import styled from 'styled-components';

function RegisterButton(props) {
  return (
    <svg height='75' width='205'>
      <Register onClick={props.onClick} href={props.href}>
        <path d='M10 5 L170 5 L200 30 L200 75 L40 75 L10 45 Z' fill='#f0ff00' />
        <text
          x='100'
          y='37.5'
          fill='#000000'
          dominantBaseline='middle'
          textAnchor='middle'
        >
          {props.children}
        </text>
      </Register>
    </svg>
  );
}

const Register = styled.a`
  path,
  text {
    transition: transform 0.25s;
    transition-timing-function: ease-in-out;
  }

  &:hover path {
    fill: #cedb00;
    transform: translateY(-5px);
  }

  &:hover text {
    transform: translateY(-5px);
    text-decoration: underline;
  }
`;

export default RegisterButton;
