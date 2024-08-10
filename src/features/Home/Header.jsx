import { header } from './homeData';
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { nav } from './homeData';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const { logo, btnLoginText, btnSignupText } = header;
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={` ${
        isActive ? 'bg-secondary-800 py-[16px]' : 'bg-transparent py-[20px]'
      } 
        fixed max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px]  lg:px-[80px] transition-all duration-300`}
    >
      <a href="">
        <img className="h-[30px]" src={logo} alt="" />
      </a>
      <Nav />
      <div
        onClick={() => setNavMobile(!navMobile)}
        className="lg:hidden absolute left-4"
      >
        {navMobile ? (
          <RiCloseFill className="text-primary-400 text-3xl cursor-pointer" />
        ) : (
          <RiMenu4Fill className="text-primary-400 text-3xl cursor-pointer" />
        )}
      </div>
      <NavMobile navMobile={navMobile} />

      <div className="hidden lg:flex gap-4">
        <button
          onClick={() => navigate('/auth')}
          className=" btn btn-sm text-white hover:text-primary-400 transition"
        >
          {btnLoginText}
        </button>
        <button className=" btn btn-sm btn-primary">{btnSignupText}</button>
      </div>
    </header>
  );
};

export default Header;

export const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex text-white gap-x-8 ">
        {nav.map((_menu) => {
          return (
            <li key={_menu.name}>
              <a
                className="hover:text-primary-400 transition"
                href={_menu.href}
              >
                {_menu.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export const NavMobile = ({ navMobile }) => {
  const navigate = useNavigate();
  return (
    <nav
      className={`
        ${navMobile ? 'min-h-screen' : 'min-h-0'} 
        lg:hidden bg-secondary-800 fixed right-0 top-0 left-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}
    >
      <ul className="w-full h-full flex flex-col justify-center items-center gap-y-8">
        {nav.map((_menu) => {
          return (
            <li key={_menu.name}>
              <a className="text-white text-body-md" href={_menu.href}></a>
              {_menu.name}
            </li>
          );
        })}
      </ul>
      <div className="-mt-44 flex justify-center gap-x-8">
        <button className="btn btn-lg text-white">ورود</button>
        <button
          onClick={() => navigate('/auth')}
          className="btn btn-lg btn-primary"
        >
          ثبت‌نام
        </button>
      </div>
    </nav>
  );
};
