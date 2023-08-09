import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { routes } from "../constants";
import { LogOut } from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/login");
  };
  return (
    <div className="hidden md:block w-[230px] bg-dark fixed h-[95%] left-4 top-6 rounded-3xl">
      <img src={logo} alt="logo" className="mx-auto w-[150px] mt-[87px]" />

      <div className="h-[2px] bg-white w-[45%] mx-auto mt-11" />

      <ul className="mx-6 mt-6 space-y-8 relative h-[70%]">
        {routes.map((route) => (
          <li key={route.label} className=" relative">
            <NavLink
              to={route.href}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-active active-link flex gap-4 items-center"
                  : "text-white flex gap-4 items-center"
              }
            >
              {route.icon}
              {route.label}
            </NavLink>
          </li>
        ))}

        <li
          onClick={logout}
          className=" text-white flex gap-4 items-center absolute bottom-0 cursor-pointer"
        >
          <LogOut />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
