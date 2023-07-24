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

    getExpensesByCat: builder.query({
      query: (userId) => ({
        url: `expenses/group/${userId}`,
      }),
    }),

    createExpense: builder.mutation({
      query: (data) => ({
        url: "expenses",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Expenses"],
    }),
  }),
});

export const {
  useGetExpensesQuery,
  useGetExpensesByCatQuery,
  useCreateExpenseMutation,
} = expensesApi;
export default expensesApi;
