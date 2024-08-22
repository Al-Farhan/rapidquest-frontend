import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <div className="fixed h-screen p-4 bg-white flex flex-col justify-between">
        <Sidebar />
      </div>
      <main className="ml-20 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
