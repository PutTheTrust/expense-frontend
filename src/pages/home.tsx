import MobileNav from "../components/mobile-nav";
import Sidebar from "../components/sidebar";

import ExpenseChart from "../components/expense-chart";
import LoanChart from "../components/loan-chart";
// import TestChart from "../components/test-chart";
import BalanceCard from "../components/balance-card";
import ExpenseTable from "../components/expense-table";
import { useSelector } from "react-redux";

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
            <h2 className="text-white text-xl">Hi, {name}</h2>
            <p className="bg-rose-500 h-10 w-10 rounded-full flex justify-center items-center text-lg font-bold">
              {name.substring(0, 1)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <BalanceCard />
          <BalanceCard />
          <BalanceCard />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <ExpenseChart />
          <LoanChart />
          {/* <TestChart /> */}
        </div>

        <ExpenseTable />
      </div>
    </div>
  );
};

export default Home;
