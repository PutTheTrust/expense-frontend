import moment from "moment";
import { useGetLoansQuery } from "../apis/loan-api";
import MobileNav from "../components/mobile-nav";
import Sidebar from "../components/sidebar";
import { Button } from "../components/ui/button";
import ExpenseForm from "../components/expense-form";

const Loans = () => {
  const { data, isLoading } = useGetLoansQuery("64b8c14935ef2e83200681bb");
  // console.log(data.data);
  // console.log(data.data.loans);
  return (
    <div className="h-screen bg-dark-bg">
      <Sidebar />
      <MobileNav />
      <div className="md:ml-[300px]">
        <div className="flex items-center justify-between pt-4 text-white">
          <h1 className="font-bold text-xl md:text-4xl">Loans</h1>
          <ExpenseForm />
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="min-w-full divide-y divide-gray-200 text-white">
            <thead className="">
              <tr>
                <th className="px-6 py-3 text-xs font-bold text-left uppercase ">
                  Lender
                </th>
                <th className="px-6 py-3 text-xs font-bold text-left uppercase ">
                  Borrow Date
                </th>
                <th className="px-6 py-3 text-xs font-bold text-left uppercase ">
                  Due Date
                </th>
                <th className="px-6 py-3 text-xs font-bold text-left uppercase ">
                  Status
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
                <p>Loading...</p>
              ) : (
                data.data.loans.map((loan: any) => (
                  <tr>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      {loan.lender}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      {moment(loan.borrowDate).format("MMMM Do YYYY")}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      {moment(loan.due).format("MMMM Do YYYY")}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      {loan.status}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      <Button variant="secondary">Edit</Button>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      <Button variant="destructive">Delete</Button>
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

export default Loans;
