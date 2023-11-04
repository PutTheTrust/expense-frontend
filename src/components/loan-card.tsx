import { useSelector } from "react-redux";
import { useGetTotalLoansQuery } from "../apis/loan-api";
import BalanceCard from "./balance-card";
import { Wallet } from "lucide-react";
import NoItems from "./no-items";

const LoanCard = () => {
  const userId = useSelector((state: any) => state.authStore.userId);
  const { data, isLoading } = useGetTotalLoansQuery(userId);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : data.results === 0 ? (
        <NoItems text="No Loans yet." />
      ) : (
        <BalanceCard
          title="Total Loans"
          text={`R${data.total[0].totalAmount}`}
          icon={<Wallet />}
        />
      )}
    </>
  );
};

export default LoanCard;
