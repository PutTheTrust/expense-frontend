import moment from "moment";

import Card from "../components/card";
import MobileNav from "../components/mobile-nav";
import Sidebar from "../components/sidebar";

import { useGetExpensesQuery } from "../apis/expense-api";
import ExpenseForm from "../components/expense-form";
import { useSelector } from "react-redux";
import DeleteButton from "../components/delete-button";
import UpdateExpenseForm from "../components/update-expense-form";

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
        {/* <div className="grid items-center justify-center md:grid-cols-2 xl:grid-cols-3 gap-4">
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
        </div> */}
        <div className="overflow-x-auto mt-10">
          <table className="min-w-full divide-y divide-gray-200 text-white">
            <thead className="">
              <tr>
                <th className="px-6 py-3 text-xs font-bold text-left uppercase ">
                  ID
                </th>
                <th className="px-6 py-3 text-xs font-bold text-left uppercase ">
                  Expense
                </th>
                <th className="px-6 py-3 text-xs font-bold text-left uppercase ">
                  Date
                </th>
                <th className="px-6 py-3 text-xs font-bold text-left uppercase ">
                  Price
                </th>
                <th className="px-6 py-3 text-xs font-bold text-left uppercase ">
                  Category
                </th>
                <th className="px-6 py-3 text-xs font-bold text-left uppercase ">
                  Description
                </th>
                <th className="px-6 py-3 text-xs font-bold text-left uppercase ">
                  Edit
                </th>
                <th className="px-6 py-3 text-xs font-bold text-left uppercase ">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {isLoading ? (
                <td>Loading...</td>
              ) : (
                data.data.expenses.map((expense: any) => (
                  <tr key={expense._id}>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      {expense._id}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      {expense.name}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      {moment(expense.date).format("MMMM Do YYYY")}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      {expense.price}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      {expense.category}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      {expense.description}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      <UpdateExpenseForm
                        id={expense._id}
                        name={expense.name}
                        price={expense.price}
                        category={expense.category}
                        description={expense.description}
                      />
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      <DeleteButton id={expense._id} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
