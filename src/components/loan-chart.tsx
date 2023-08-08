import { VictoryPie, VictoryContainer } from "victory";
import { useGetLoansByPersonQuery } from "../apis/loan-api";
import { useSelector } from "react-redux";

const LoanChart = () => {
  const userId = useSelector((state: any) => state.authStore.userId);
  const { data, isLoading } = useGetLoansByPersonQuery(userId);

  return (
    <div className="flex flex-col items-center bg-[#272D35] text-white text-ellipsis rounded-[10px]">
      <h1 className="text-2xl mb-2">Loans</h1>
      <div className="w-[75%] md:w-1/2">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <VictoryPie
            data={data.categories.slice(0, 3)}
            innerRadius={100}
            animate={{
              duration: 2000,
            }}
            colorScale={"green"}
            containerComponent={<VictoryContainer responsive={true} />}
            style={{ labels: { fill: "white" } }}
          />
        )}
      </div>
    </div>
  );
};

export default LoanChart;
