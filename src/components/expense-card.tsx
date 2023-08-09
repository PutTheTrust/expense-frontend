import { useSelector } from "react-redux";
import BalanceCard from "./balance-card";
import { useGetTotalExpensesQuery } from "../apis/expense-api";

const ExpenseCard = () => {
  const userId = useSelector((state: any) => state.authStore.userId);
  const { data, isLoading } = useGetTotalExpensesQuery(userId);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : data.results === 0 ? (
        <p>No Expenses yet.</p>
      ) : (
        <BalanceCard title="Total Loans" total={data.total[0].totalAmount} />
      )}
    </>
  );
};

export default ExpenseCard;
