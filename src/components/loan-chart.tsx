import { VictoryPie, VictoryContainer } from "victory";
import { useGetLoansByPersonQuery } from "../apis/loan-api";
import { useSelector } from "react-redux";

const LoanChart = () => {
  const userId = useSelector((state: any) => state.authStore.userId);
  const { data, isLoading } = useGetLoansByPersonQuery(userId);

  return (
    <div className="flex flex-col items-center bg-[#272D35] text-white text-ellipsis rounded-[10px]">
      <h1 className="text-2xl mb-2">Expenses by Lender</h1>
      <div className="w-[75%] md:w-1/2">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <VictoryPie
            data={data.categories}
            innerRadius={100}
            animate={{
              duration: 2000,
            }}
            colorScale={"green"}
            // width={300}
            containerComponent={<VictoryContainer responsive={true} />}
          />
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-2 text-white w-full px-5">
        {!isLoading &&
          (data.categories.length === 0 ? (
            <p>NO categories yet!</p>
          ) : (
            data.categories.map((cat: any, idx: number) => (
              <div key={idx} className="flex gap-5">
                {/* <div className={`h-5 w-5 bg-[${COLORS[idx]}]`} /> */}
                {/* <p>
                  {cat.x} - R{cat.y}
                </p> */}
              </div>
            ))
          ))}
      </div>
    </div>
  );
};

export default LoanChart;
