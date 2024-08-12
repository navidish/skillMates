
import {HiCollection , HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import MainLayout from "../../ui/MainLayout";

function OwnerLayout() {
  const navlinkClass = " flex items-center gap-x-2 hover:bg-secondary-400 hover:gap-x-4 hover:text-secondary-900 px-2 py-3 rounded-lg  transition-all duration-300";



  // &:before {
  //   content: "";
  //   background:transparent;
  //   height: 2em;
  //   width: 2em;
  //   position: absolute;
  //   top: -2em;
  //   left: 0em;
  //   z-index:0!important;
  //   border-radius: 0 0 0 12px;
  //   box-shadow: 0 16px 0 0 ${theme?.palette?.grey[700]};
  // }
  // &:after {
  //   content: "";
  //   background:transparent;
  //   height: 2em;
  //   width: 2em;
  //   position: absolute;
  //   bottom: -2em;
  //   left: 0em;
  //   z-index:0!important;
  //   border-radius: 12px 0 0 0;
  //   box-shadow: 0 -16px 0 0 ${theme?.palette?.grey[700]};
  // }



  return (
    <MainLayout>
        <div className="row-start-1 row-span-2 p-4 mt-[148px]">
            <ul className="flex flex-col gap-y-4">
              <li>
                <NavLink
                className="navlink" 
                activeClassName="active"
                    to={'dashboard'}
                   >
                    <HiHome className="h-5 w-5"/>
                    {'داشبورد'}
                </NavLink>
              </li>
              <li>
                <NavLink
                    to={'projects'}
                    className={({ isActive }) =>
                      isActive ? `${navlinkClass} bg-primary-100/80 text-primary-900` : `${navlinkClass} text-secondary-600` }>
                  <HiCollection className="h-5 w-5"/>
                  {'پروژه‌ها'}
                </NavLink>
              </li>

            </ul>
       </div>
    </MainLayout>
  );
}
export default OwnerLayout;

