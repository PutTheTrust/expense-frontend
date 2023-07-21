import { useEffect, useState } from "react";
import moment from "moment";

import Button from "../components/button";
import Card from "../components/card";
import MobileNav from "../components/mobile-nav";
import Sidebar from "../components/sidebar";
import axios from "axios";

interface ExpenseProps {
  _id: string;
  name: string;
  date: string;
  price: number;
  category: string;
  description: string;
}

const Expenses = () => {
  const [expenses, setExpenses] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getExpenses = async () => {
      let res = await axios.get(
        "http://localhost:3000/api/v1/expenses/64b8c14935ef2e83200681bb",
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      );
      console.log(res.data.data.expenses);
      setExpenses(res.data.data.expenses);
    };
    getExpenses();
    // console.log(exp);
    // 64b8c14935ef2e83200681bb
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Sidebar />
      <MobileNav />
      <div className="md:ml-[306px] mx-4">
        <div className="flex items-center justify-between mt-4">
          <h1 className="font-bold text-xl md:text-4xl">EXPENSES</h1>
          <Button text="Add Expense" onclick={() => {}} />
        </div>
        <div className="grid items-center md:grid-cols-2 xl:grid-cols-3 gap-4">
          {expenses?.map((expense: ExpenseProps) => (
            <Card
              key={expense._id}
              title={expense.name}
              date={moment(expense.date).format("MMMM Do YYYY")}
              price={expense.price}
              category={expense.category}
              description={expense.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expenses;

{
}
