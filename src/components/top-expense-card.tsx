import { useSelector } from "react-redux";
// import { useGetTotalLoansQuery } from "../apis/loan-api";
import { useGetExpensesQuery } from "../apis/expense-api";
import NoItems from "./no-items";
import BalanceCard from "./balance-card";
import { CopySlash } from "lucide-react";

const TopExpenseCard = () => {
  const userId = useSelector((state: any) => state.authStore.userId);
  const { data, isLoading } = useGetExpensesQuery(userId);

  const getHighestExpense = () => {
    if (!isLoading) {
      let max = 0;
      let maxIdx = 0;
      data.data.expenses.map((exp: any, index: number) => {
        if (exp.price > max) {
          max = exp.price;
          // console.log(max);
        }

        maxIdx = index;
      });

      return maxIdx;
    }
  };

  // let test = getHighestExpense();
  // console.log(test);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : data.results === 0 ? (
        <NoItems text="Add Expenses" />
      ) : (
        <BalanceCard
          title="Top Expense"
          text={`${data.data.expenses[getHighestExpense()!].category}`}
          icon={<CopySlash />}
        />
        // <></>
      )}
    </>
  );
};

export default TopExpenseCard;
