import NavigationBar from "@/components/nav/NavigationBar";
import { Outlet } from "react-router-dom";

const BasePage = () => {
  return (
    <div className="relative">
      <NavigationBar />
      <div className="bg-slate-50 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default BasePage;
