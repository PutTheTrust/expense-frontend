import { Link } from "react-router-dom";
import { routes } from "../constants";

const MobileNav = () => {
  return (
    <div className="bg-dark rounded-full fixed bottom-8 w-[90%] left-[5%] right-[5%] md:hidden">
      <ul className="flex justify-between items-center h-[56px] mx-8">
        {routes.map((route) => (
          <li
            key={route.label}
            className={`${route.active ? "text-active" : "text-white"}`}
          >
            <Link to={route.href}>{route.icon}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
