import { LayoutDashboard, Calculator, Wallet } from "lucide-react";
const pathname = location.pathname;
export const routes = [
  {
    id: 0,
    href: "/",
    label: "Dashboard",
    active: pathname === "/",
    icon: <LayoutDashboard />,
  },
  {
    id: 1,
    href: "/expenses",
    label: "Expenses",
    active: pathname === "/expenses",
    icon: <Calculator />,
  },
  {
    id: 2,
    href: "/loans",
    label: "Loans",
    active: pathname === "/loans",
    icon: <Wallet />,
  },
];
