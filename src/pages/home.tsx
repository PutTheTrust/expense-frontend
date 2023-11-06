import MobileNav from "../components/mobile-nav";
import Sidebar from "../components/sidebar";

import ExpenseChart from "../components/expense-chart";
import LoanChart from "../components/loan-chart";
import BalanceCard from "../components/balance-card";
import ExpenseTable from "../components/expense-table";
import { useSelector } from "react-redux";
import ExpenseCard from "../components/expense-card";
import LoanCard from "../components/loan-card";
import { MonitorCheck } from "lucide-react";
import TopExpenseCard from "../components/top-expense-card";

const Home = () => {
  const name = useSelector((state: any) => state.authStore.name);
  return (
    <div className="relative h-full">
      <Sidebar />
      <MobileNav />
      <div className="px-10 md:ml-[246px] h-screen">
        <div className="flex items-center justify-between mb-4 md:pt-10">
          <h1 className=" text-white text-2xl tracking-widest ">DASHBOARD</h1>
          <div className="flex items-center gap-2">
            <h2 className="text-white text-xl hidden md:block">Hi, {name}</h2>
            <p className="bg-rose-500 h-10 w-10 rounded-full flex justify-center items-center text-lg font-bold">
              {name.substring(0, 1)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <ExpenseCard />
          <LoanCard />
          <TopExpenseCard />
          <BalanceCard title="TEMP" text={"TEMP"} icon={<MonitorCheck />} />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <ExpenseChart />
          <LoanChart />
        </div>

        <ExpenseTable />

        <div className="h-24 md:hidden" />
      </div>
    </div>
  );
};

export default Home;
