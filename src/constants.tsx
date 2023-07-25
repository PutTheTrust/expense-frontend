import { LayoutDashboard, Calculator, Wallet, LogOut } from "lucide-react";
const pathname = location.pathname;
export const routes = [
  {
    id: 0,
    href: "/",
    label: "Dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: 1,
    href: "/expenses",
    label: "Expenses",
    icon: <Calculator />,
  },
  {
    id: 2,
    href: "/loans",
    label: "Loans",
    icon: <Wallet />,
  },
  {
    id: 3,
    href: "/login",
    label: "Logout",
    icon: <LogOut />,
  },
];
