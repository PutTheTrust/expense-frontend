import { useSelector } from "react-redux";
// import { useGetTotalLoansQuery } from "../apis/loan-api";
import { useGetExpensesQuery } from "../apis/expense-api";
import NoItems from "./no-items";
import BalanceCard from "./balance-card";
import { WalletCards } from "lucide-react";
import Loader from "./loader";

const TopExpenseCard = () => {
  const userId = useSelector((state: any) => state.authStore.userId);
  const { data, isLoading } = useGetExpensesQuery(userId);

  const getHighestExpense = (): number => {
    if (!isLoading) {
      // console.log(await data.length);
      if (data) {
        var maxIdx = 0;
        let max = 0;
        data.data.expenses.map((exp: any, index: number) => {
          if (exp.price > max) {
            max = exp.price;
            // console.log("MAX _>", max);
            maxIdx = index;
          }
        });
        return maxIdx;
      }
    }
    return -1;
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : data.results === 0 ? (
        <NoItems text="Add Expenses" />
      ) : (
        <>
          <BalanceCard
            title="Top Expense"
            text={`${
              getHighestExpense() !== -1
                ? data.data.expenses[getHighestExpense()!].category
                : "Add an Expense"
            }`}
            icon={<WalletCards />}
          />
          {console.log(getHighestExpense())}
        </>
        // <></>
      )}
    </>
  );
};

export default TopExpenseCard;
