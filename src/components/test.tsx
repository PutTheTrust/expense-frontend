// // install (please try to align the version of installed @nivo packages)
// // yarn add @nivo/pie
// import { ResponsivePie } from "@nivo/pie";
// import { useSelector } from "react-redux";
// import { useGetLoansByPersonQuery } from "../apis/loan-api";

// // make sure parent container have a defined height when using
// // responsive component, otherwise height will be 0 and
// // no chart will be rendered.
// // website examples showcase many properties,
// // you'll often use just a few of them.
// const data2 = [
//   {
//     id: "css",
//     label: "css",
//     value: 357,
//     color: "hsl(19, 70%, 50%)",
//   },
//   {
//     id: "go",
//     label: "go",
//     value: 560,
//     color: "hsl(312, 70%, 50%)",
//   },
//   {
//     id: "erlang",
//     label: "erlang",
//     value: 564,
//     color: "hsl(324, 70%, 50%)",
//   },
//   {
//     id: "php",
//     label: "php",
//     value: 280,
//     color: "hsl(126, 70%, 50%)",
//   },
//   {
//     id: "scala",
//     label: "scala",
//     value: 150,
//     color: "hsl(282, 70%, 50%)",
//   },
// ];
// const Test = () => {
//   const userId = useSelector((state: any) => state.authStore.userId);
//   const { data, isLoading } = useGetLoansByPersonQuery(userId);
//   if (!isLoading) {
//     console.log(data.categories);
//   }
//   return (
//     <div className="h-[500px]">
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <RadialChart
//         data={myData}
//         width={300}
//         height={300} />
//       )}
//       <h1>TEST</h1>
//     </div>
//   );
// };

// export default Test;
