import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { routes } from "../constants";

const Sidebar = () => {
  return (
    <div className="hidden md:block w-[230px] bg-dark fixed h-[95%] left-4 top-6 rounded-3xl">
      <img src={logo} alt="logo" className="mx-auto w-[150px] mt-[87px]" />

      <div className="h-[2px] bg-white w-[45%] mx-auto mt-11" />

      <ul className="mx-6 mt-6 space-y-8">
        {routes.map((route) => (
          <li key={route.label} className="flex gap-4 items-center relative">
            {route.icon}

            <NavLink
              to={route.href}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-active active-link"
                  : "text-white"
              }
            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
