import { useSelector } from "react-redux";
import { useGetTotalLoansQuery } from "../apis/loan-api";
import BalanceCard from "./balance-card";

const ExpenseCard = () => {
  const userId = useSelector((state: any) => state.authStore.userId);
  const { data, isLoading } = useGetTotalLoansQuery(userId);

  //   if (!isLoading) {
  //     console.log(data.total[0].totalAmount);
  //   }
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : data.results === 0 ? (
        <p>No Expenses yet.</p>
      ) : (
        <BalanceCard title="Total Loans" total={data.total[0].totalAmount} />
        // console.log(data.total.totalAmount)
      )}
    </>
  );
};

export default ExpenseCard;
