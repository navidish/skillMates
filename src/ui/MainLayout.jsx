import { Outlet } from "react-router-dom";


function MainLayout({ children }) {
  return (
    <div className="grid h-screen grid-cols-[10rem_1fr]">
      {children}
      <div className="bg-secondary-0 h-screen my-8 ml-8 overflow-y-auto rounded-2xl">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
            <p>header</p>
            <Outlet/>
        </div>
      </div>
    </div>
  );
}
export default MainLayout;
