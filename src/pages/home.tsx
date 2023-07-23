import MobileNav from "../components/mobile-nav";
import Sidebar from "../components/sidebar";
import { Button } from "../components/ui/button";

import React, { PureComponent } from "react";
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

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Home = () => {
  return (
    <div className="relative">
      <Sidebar />
      <MobileNav />
      <div className="md:ml-[246px] h-screen">
        <h1>Charts</h1>
        {/* <div className="h-1/2 flex justify-between gap-5">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill="#00ff00" />
              <XAxis dataKey="name" />
              <YAxis />
            </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill="#00ff00" />
              <XAxis dataKey="name" />
              <YAxis />
            </BarChart>
          </ResponsiveContainer>
        </div> */}

        <div className="flex items-center flex-col bg-slate-600 w-1/2">
          <div className="relative">
            <PieChart
              // className="flex items-center justify-center relative"
              width={300}
              height={250}
            >
              <Pie
                data={data}
                cx={120}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
          <p className="absoulte inset-0">R5000</p>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex gap-5">
              <div className="h-5 w-5 bg-[#0088FE]" />
              <p>Entertainment</p>
            </div>
            <div className="flex gap-5">
              <div className="h-5 w-5 bg-[#00C49F]" />
              <p>Shopping</p>
            </div>
            <div className="flex gap-5">
              <div className="h-5 w-5 bg-[#FFBB28]" />
              <p>Gym</p>
            </div>
            <div className="flex gap-5">
              <div className="h-5 w-5 bg-[#FF8042]" />
              <p>Food</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
