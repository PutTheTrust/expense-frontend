import moment from "moment";
import { useGetExpensesQuery } from "../apis/expense-api";
import { useSelector } from "react-redux";

const ExpenseTable = () => {
  const userId = useSelector((state: any) => state.authStore.userId);
  const { data, isLoading } = useGetExpensesQuery(userId);
  //   if (!isLoading) {
  //     console.log(data);
  //   }
  return (
    <>
      {!isLoading && data.results !== 0 ? (
        <div className="overflow-x-auto mt-10 bg-[#272D35] rounded-[10px] px-4">
          <table className="min-w-full divide-y divide-gray-200 text-white">
            <thead className="">
              <tr>
                <th className="px-6 py-3 text-xs font-bold text-left uppercase ">
                  Name
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
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td>Loading...</td>
                </tr>
              ) : (
                data.data.expenses.slice(0, 3).map((expense: any) => (
                  <tr key={expense._id}>
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
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-ellipsis">
                      {expense.description}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="flex justify-center items-center text-3xl text-white mt-4">
          No Loans Yet
        </p>
      )}
    </>
  );
};

export default ExpenseTable;
