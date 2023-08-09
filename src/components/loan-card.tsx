import { useSelector } from "react-redux";
import { useGetTotalLoansQuery } from "../apis/loan-api";
import BalanceCard from "./balance-card";

const LoanCard = () => {
  const userId = useSelector((state: any) => state.authStore.userId);
  const { data, isLoading } = useGetTotalLoansQuery(userId);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : data.results === 0 ? (
        <p>No Loans yet.</p>
      ) : (
        <BalanceCard title="Total Loans" total={data.total[0].totalAmount} />
      )}
    </>
  );
};

export default LoanCard;