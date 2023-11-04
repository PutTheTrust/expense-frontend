import { useSelector } from "react-redux";

import BalanceCard from "./balance-card";
import { useGetTotalExpensesQuery } from "../apis/expense-api";
import { Calculator } from "lucide-react";

const ExpenseCard = () => {
  const userId = useSelector((state: any) => state.authStore.userId);
  const { data, isLoading } = useGetTotalExpensesQuery(userId);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : data.results === 0 ? (
        <div className="bg-[#272D35] text-white h-32 rounded-[10px] p-4">
          <p>No Expenses yet.</p>
        </div>
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
