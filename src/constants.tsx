import { LayoutDashboard, Calculator, Wallet } from "lucide-react";
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
];
