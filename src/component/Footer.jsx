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
    
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <img src={facebook} alt="facebook" />
      <img src={instagram} alt="instagram" />
      <img src={x} alt="twitter" />
    </div>
  </nav>

  <div className='pt-10 border-t border-green-800 flex justify-between w-11/12 mx-auto text-gray-400'>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
    <div className='flex gap-4'>
      <p >Privacy Policy</p>
      <p >Terms of Service</p>
      <p>Cookies</p>
    </div>
  </div>
</footer>
  );
};

export default Footer;