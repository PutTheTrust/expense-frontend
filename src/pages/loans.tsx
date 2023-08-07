import moment from "moment";
import { useGetLoansQuery } from "../apis/loan-api";
import MobileNav from "../components/mobile-nav";
import Sidebar from "../components/sidebar";
import LoanForm from "../components/loan-form";
import DeleteButton from "../components/delete-button";
import { useSelector } from "react-redux";
import UpdateLoanForm from "../components/update-loan-form";

const Loans = () => {
  const userId = useSelector((state: any) => state.authStore.userId);
  const { data, isLoading } = useGetLoansQuery(userId);
  // console.log(data.data);
  // console.log(data.data.loans);
  return (
    <div className="h-screen bg-dark-bg">
      <Sidebar />
      <MobileNav />
      <div className="md:ml-[300px]">
        <div className="flex items-center justify-between pt-4 text-white">
          <h1 className="font-bold text-xl md:text-4xl">Loans</h1>
          <LoanForm text="Add Loan" />
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
                  Amount
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
                <tr>
                  <td>Loading...</td>
                </tr>
              ) : (
                data.data.loans.map((loan: any) => (
                  <tr key={loan._id}>
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
                      {loan.amount}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      <UpdateLoanForm
                        id={loan._id}
                        lender={loan.lender}
                        borrowDate={loan.borrowDate}
                        due={loan.due}
                        status={loan.status}
                        amount={loan.amount}
                      />
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      <DeleteButton id={loan._id} />
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
