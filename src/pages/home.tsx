import MobileNav from "../components/mobile-nav";
import Sidebar from "../components/sidebar";

import ExpenseChart from "../components/expense-chart";
import LoanChart from "../components/loan-chart";

const Home = () => {
  return (
    <div className="relative bg-dark-bg">
      <Sidebar />
      <MobileNav />
      <div className="md:ml-[246px] h-screen">
        <h1 className="px-10 text-white text-2xl tracking-widest mb-4">HOME</h1>

        <div className="flex flex-col md:flex-row w-full justify-between gap-10 px-10">
          <ExpenseChart />
          <LoanChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
