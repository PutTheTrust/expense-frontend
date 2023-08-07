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

    updateExpense: builder.mutation({
      query: (data) => ({
        url: "expenses",
        method: "PATCH",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Expenses"],
    }),

    deleteExpense: builder.mutation({
      query: (expenseId: any) => ({
        url: "expenses",
        method: "DELETE",
        body: { expenseId },
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
  useUpdateExpenseMutation,
  useCreateExpenseMutation,
  useDeleteExpenseMutation,
} = expensesApi;
export default expensesApi;
