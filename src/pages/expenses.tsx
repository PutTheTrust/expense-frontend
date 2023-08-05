import moment from "moment";

import Card from "../components/card";
import MobileNav from "../components/mobile-nav";
import Sidebar from "../components/sidebar";

import { useGetExpensesQuery } from "../apis/expense-api";
import ExpenseForm from "../components/expense-form";
import { useSelector } from "react-redux";

interface ExpenseProps {
  _id: string;
  name: string;
  date: string;
  price: number;
  category: string;
  description: string;
}

const Expenses = () => {
  const userId = useSelector((state: any) => state.authStore.userId);
  const { data, isLoading } = useGetExpensesQuery(userId);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div className="bg-dark-bg pb-32">
      <Sidebar />
      <MobileNav />
      <div className="md:ml-[306px] mx-4 text-white">
        <div className="flex items-center justify-between pt-4">
          <h1 className="font-bold text-xl md:text-4xl">EXPENSES</h1>
          <ExpenseForm />
        </div>
        <div className="grid items-center justify-center md:grid-cols-2 xl:grid-cols-3 gap-4">
          {isLoading ? (
            <p className="h-screen">Loading...</p>
          ) : (
            data.data.expenses.map((expense: ExpenseProps) => (
              <Card
                key={expense._id}
                id={expense._id}
                title={expense.name}
                date={moment(expense.date).format("MMMM Do YYYY")}
                price={expense.price}
                category={expense.category}
                description={expense.description}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
