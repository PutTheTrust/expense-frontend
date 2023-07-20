import { useEffect, useState } from "react";
import Button from "../components/button";
import Card from "../components/card";
import MobileNav from "../components/mobile-nav";
import Sidebar from "../components/sidebar";
import axios from "axios";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const getExpenses = async () => {
      let res = await axios.get("http://localhost:3000/api/v1/expenses", {
        headers: { "Access-Control-Allow-Origin": "*" },
        data: {
          userId: "64b8c14935ef2e83200681bb",
        },
      });
      console.log(res.data);
    };
    getExpenses();
    // console.log(exp);
    // 64b8c14935ef2e83200681bb
  }, []);
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
