import { Outlet } from 'react-router-dom';
import Header from './Header';
function MainLayout({ children }) {
  return (
    <div className="grid h-screen grid-cols-[12rem_1fr]">
      {children}
      <div className="bg-secondary-100 h-screen p-8 my-4 ml-4 overflow-y-auto rounded-2xl">
        <Header />
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default MainLayout;
