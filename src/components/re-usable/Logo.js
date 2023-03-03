import companylogo from './../../assets/imgs/logo1.jpg';

function Logo({ className }) {
  return <img className={className} alt='Company Logo' src={companylogo} height={80} width={85} borderRadius={85/2}/>;
}

export default Logo;
