import { Outlet } from 'react-router-dom';
import Header from './Header';
function MainLayout({ children }) {
  return (
    <div className="grid h-screen grid-cols-[12rem_1fr] p-3 bg-primary-700">
      {children}
      <div className="bg-white  px-8  overflow-y-auto rounded-2xl">
        <Header />
        <div className="mx-auto pt-8 max-w-screen-lg flex flex-col ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default MainLayout;
