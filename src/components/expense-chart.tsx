import { VictoryPie, VictoryContainer } from "victory";
import { useGetExpensesByCatQuery } from "../apis/expense-api";

const ExpenseChart = () => {
  const { data, isLoading } = useGetExpensesByCatQuery(
    "64b8c14935ef2e83200681bb"
  );

  return (
    <div className="flex flex-col items-center bg-[#5C8D7B] shadow-lg md:w-1/2">
      <h1 className="text-2xl mb-2 text-white">Expenses by Category</h1>
      <div className="w-[78%] md:w-1/2">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <VictoryPie
            data={data.categories}
            innerRadius={100}
            animate={{
              duration: 2000,
            }}
            // width={300}
            containerComponent={<VictoryContainer responsive={true} />}
          />
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-2 w-full text-white px-5">
        {!isLoading &&
          (data.categories.length === 0 ? (
            <p>NO categories yet!</p>
          ) : (
            data.categories.map((cat: any, idx: number) => (
              <div key={idx} className="flex gap-5">
                {/* <div className={`h-5 w-5 bg-[${COLORS[idx]}]`} /> */}
                <p>
                  {cat.x} {cat.y}
                </p>
              </div>
            ))
          ))}
      </div>
    </div>
  );
};

export default ExpenseChart;
