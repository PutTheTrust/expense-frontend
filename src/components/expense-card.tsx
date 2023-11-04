import { useSelector } from "react-redux";

import BalanceCard from "./balance-card";
import { useGetTotalExpensesQuery } from "../apis/expense-api";
import { Calculator } from "lucide-react";
import NoItems from "./no-items";

const ExpenseCard = () => {
  const userId = useSelector((state: any) => state.authStore.userId);
  const { data, isLoading } = useGetTotalExpensesQuery(userId);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : data.results === 0 ? (
        <NoItems text="No Expenses yet." />
      ) : (
        <BalanceCard
          title="Total Expenses"
          text={`R${data.total[0].totalAmount}`}
          icon={<Calculator />}
        />
      )}
    </>
  );
};

export default ExpenseCard;
