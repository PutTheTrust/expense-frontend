import { Link, NavLink } from "react-router-dom";
import { routes } from "../constants";

const MobileNav = () => {
  return (
    <div className="bg-dark rounded-full fixed bottom-8 w-[90%] left-[5%] right-[5%] md:hidden">
      <ul className="flex justify-between items-center h-[56px] mx-8">
        {routes.map((route) => (
          <li key={route.label}>
            <NavLink
              to={route.href}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-active" : "text-white"
              }
            >
              {route.icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
