import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const expensesApi = createApi({
  reducerPath: "expenseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/",
  }),
  tagTypes: ["Expenses"],
  endpoints: (builder) => ({
    getExpenses: builder.query({
      query: (userId) => ({
        url: `expenses/${userId}`,
      }),
    }),
  }),
});

export const { useGetExpensesQuery } = expensesApi;
export default expensesApi;
