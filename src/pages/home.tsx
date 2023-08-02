import MobileNav from "../components/mobile-nav";
import Sidebar from "../components/sidebar";

import ExpenseChart from "../components/expense-chart";
import LoanChart from "../components/loan-chart";
import TestChart from "../components/test-chart";
import BalanceCard from "../components/balance-card";
import ExpenseTable from "../components/expense-table";

const Home = () => {
  return (
    <div className="relative h-full">
      <Sidebar />
      <MobileNav />
      <div className="px-10 md:ml-[246px] h-screen">
        <h1 className=" text-white text-2xl tracking-widest mb-4 md:pt-10">
          DASHBOARD
        </h1>

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
