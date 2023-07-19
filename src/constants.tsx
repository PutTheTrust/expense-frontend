import { LayoutDashboard, Calculator, Wallet } from "lucide-react";
const pathname = location.pathname;
export const routes = [
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
