import { VictoryPie, VictoryContainer } from "victory";
import { useGetExpensesByCatQuery } from "../apis/expense-api";
import { useSelector } from "react-redux";

const ExpenseChart = () => {
  const userId = useSelector((state: any) => state.authStore.userId);
  const { data, isLoading } = useGetExpensesByCatQuery(userId);
  return (
    <div className="flex flex-col items-center bg-[#272D35] shadow-lg rounded-[10px]">
      <h1 className="text-2xl mb-2 text-white">Expenses</h1>
      {!isLoading && data.results !== 0 ? (
        <div className="w-[78%] md:w-1/2">
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
      ) : (
        <p className="flex justify-center items-center text-3xl text-white mt-4">
          No Expenses Yet
        </p>
      )}
    </div>
  );
};

export default ExpenseChart;
