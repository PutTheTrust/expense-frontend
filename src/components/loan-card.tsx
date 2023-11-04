import { useSelector } from "react-redux";
import { useGetTotalLoansQuery } from "../apis/loan-api";
import BalanceCard from "./balance-card";
import { Wallet } from "lucide-react";

const LoanCard = () => {
  const userId = useSelector((state: any) => state.authStore.userId);
  const { data, isLoading } = useGetTotalLoansQuery(userId);
  if (!isLoading) {
    console.log(data);
  }
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : data.results === 0 ? (
        <div className="bg-[#272D35] text-white h-32 rounded-[10px] p-4">
          <p>No Loans yet.</p>
        </div>
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
