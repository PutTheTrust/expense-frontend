import Button from "../components/button";
import Card from "../components/card";
import MobileNav from "../components/mobile-nav";
import Sidebar from "../components/sidebar";

const Expenses = () => {
  return (
    <div>
      <Sidebar />
      <MobileNav />
      <div className="md:ml-[246px] mx-4">
        <div className="flex items-center justify-between mt-4">
          <h1 className="font-bold text-xl">EXPENSES</h1>
          <Button text="Add Expense" onclick={() => {}} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
