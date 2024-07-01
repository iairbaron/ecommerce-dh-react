import { Outlet } from "react-router-dom";
import NavBar from "../ui/navBar/NavBar";

export const LayoutMain = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
