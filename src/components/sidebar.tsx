import logo from "../assets/logo.svg";
import { LayoutDashboard, Calculator, Wallet } from "lucide-react";

const Sidebar = () => {
  const pathname = location.pathname;
  const routes = [
    {
      href: "/",
      label: "Dashboard",
      active: pathname === "/",
      icon: <LayoutDashboard />,
    },
    {
      href: "/expenses",
      label: "Expenses",
      active: pathname === "/expenses",
      icon: <Calculator />,
    },
    {
      href: "/loans",
      label: "Loans",
      active: pathname === "/loans",
      icon: <Wallet />,
    },
  ];
  return (
    <div className="w-[230px] bg-dark fixed h-[95%] left-4 top-6 rounded-3xl">
      <img src={logo} alt="logo" className="mx-auto w-[150px] mt-[87px]" />

      <div className="h-[2px] bg-white w-[45%] mx-auto mt-11" />

      <ul className="mx-6 mt-6 space-y-8">
        {routes.map((route) => (
          <li
            key={route.label}
            className={`${
              route.active ? "text-active active-link" : "text-white"
            } flex gap-4 items-center relative`}
          >
            {route.icon}
            <a className="text-xl" href={route.href}>
              {route.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
