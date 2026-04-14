import React from 'react';
import Logo from '../../public/logo-xl.png';
import facebook from '../../public/facebook.png';
import instagram from '../../public/instagram.png';
import x from '../../public/twitter.png';
const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-green-900 text-white p-10">
  <aside>
    <img src={Logo} width={300} alt="logo" />
    <p className="">
      Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <img src={facebook} alt="facebook" />
      <img src={instagram} alt="instagram" />
      <img src={x} alt="twitter" />
    </div>
  </nav>
</footer>
  );
};

export default Footer;