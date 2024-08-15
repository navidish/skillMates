import { HiCollection, HiHome } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import MainLayout from '../../ui/MainLayout';
import Logo from '../../assets/images/logo.svg';
import SideBar from '../../ui/SideBar';

function OwnerLayout() {
  return (
    <MainLayout>
      <SideBar>
        <img src={Logo} className=" text-center h-[48px]  w-fit mb-8 " />
        <ul className="flex flex-col gap-y-4">
          <NavLinkComponent to={'dashboard'}>
            <HiHome className="h-5 w-5" />
            {'داشبورد'}
          </NavLinkComponent>

          <NavLinkComponent to={'projects'}>
            <HiCollection className="h-5 w-5" />
            {'پروژه‌ها'}
          </NavLinkComponent>
        </ul>
      </SideBar>
    </MainLayout>
  );
}
export default OwnerLayout;

function NavLinkComponent({ children, to }) {
  return (
    <li>
      <NavLink className="navlink" activeClassName="active" to={to}>
        {children}
      </NavLink>
    </li>
  );
}
