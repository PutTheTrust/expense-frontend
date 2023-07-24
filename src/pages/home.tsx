import { VictoryPie } from "victory";
import { useGetExpensesByCatQuery } from "../apis/expense-api";
import MobileNav from "../components/mobile-nav";
import Sidebar from "../components/sidebar";
import { Button } from "../components/ui/button";

import React, { PureComponent, useState } from "react";
// import {
//   BarChart,
//   Bar,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Home = () => {
  // let x: any = [];
  // let y: any = [];
  const { data, isLoading } = useGetExpensesByCatQuery(
    "64b8c14935ef2e83200681bb"
  );
  if (!isLoading) {
    console.log(data.categories);
    // setX()
    // data.categories.map((item: any) => x.push(item._id) y.push(item.));
    // console.log(x);
  }

  return (
    <div className="relative">
      <Sidebar />
      <MobileNav />
      <div className="md:ml-[246px] h-screen">
        <h1>Charts</h1>

        <div className="flex w-full bg-red-800 justify-between gap-10">
          <div className="flex flex-col items-center bg-slate-100 w-1/2">
            <div className="w-1/2">
              {isLoading ? (
                <p>Loading</p>
              ) : (
                <VictoryPie
                  data={data.categories}
                  innerRadius={100}
                  animate={{
                    duration: 2000,
                  }}
                />
              )}
            </div>

            <div className="grid grid-cols-2 gap-2 w-1/2 bg-red-500">
              {!isLoading &&
                (data.categories.length === 0 ? (
                  <p>NO categories yet!</p>
                ) : (
                  data.categories.map((cat: any, idx: number) => (
                    <div key={idx} className="flex gap-5">
                      <div className={`h-5 w-5 bg-[${COLORS[idx]}]`} />
                      <p>{cat.x}</p>
                    </div>
                  ))
                ))}
            </div>
          </div>

          <div className="flex flex-col items-center bg-slate-100 w-1/2">
            <div className="w-1/2">
              {isLoading ? (
                <p>Loading</p>
              ) : (
                <VictoryPie
                  data={data.categories}
                  innerRadius={100}
                  animate={{
                    duration: 2000,
                  }}
                />
              )}
            </div>

            <div className="grid grid-cols-2 gap-2 w-1/2 bg-red-500">
              {!isLoading &&
                (data.categories.length === 0 ? (
                  <p>NO categories yet!</p>
                ) : (
                  data.categories.map((cat: any, idx: number) => (
                    <div key={idx} className="flex gap-5">
                      <div className={`h-5 w-5 bg-[${COLORS[idx]}]`} />
                      <p>{cat.x}</p>
                    </div>
                  ))
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
