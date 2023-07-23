import moment from "moment";

import Card from "../components/card";
import MobileNav from "../components/mobile-nav";
import Sidebar from "../components/sidebar";

import { useGetExpensesQuery } from "../apis/expense-api";
import ExpenseForm from "../components/expense-form";

interface ExpenseProps {
  _id: string;
  name: string;
  date: string;
  price: number;
  category: string;
  description: string;
}

const Expenses = () => {
  const { data, isLoading } = useGetExpensesQuery("64b8c14935ef2e83200681bb");

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div>
      <Sidebar />
      <MobileNav />
      <div className="md:ml-[306px] mx-4">
        <div className="flex items-center justify-between mt-4">
          <h1 className="font-bold text-xl md:text-4xl">EXPENSES</h1>
          <ExpenseForm />
        </div>
        <div className="grid items-center md:grid-cols-2 xl:grid-cols-3 gap-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data.data.expenses.map((expense: ExpenseProps) => (
              <Card
                key={expense._id}
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
