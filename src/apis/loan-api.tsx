import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const loansApi = createApi({
  reducerPath: "loanApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://expense-backend-p6ug.onrender.com/api/v1/",
  }),
  tagTypes: ["Loans"],
  endpoints: (builder) => ({
    getLoans: builder.query({
      query: (userId) => ({
        url: `loans/${userId}`,
      }),
    }),

    getLoansByPerson: builder.query({
      query: (userId) => ({
        url: `loans/group/${userId}`,
      }),
    }),

    createLoan: builder.mutation({
      query: (data) => ({
        url: "loans",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Loans"],
    }),

    updateLoan: builder.mutation({
      query: (data) => ({
        url: "loans",
        method: "PATCH",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Loans"],
    }),

    getTotalLoans: builder.query({
      query: (userId) => ({
        url: `loans/totals/total/${userId}`,
      }),
    }),

    deleteLoan: builder.mutation({
      query: (loanId: any) => ({
        url: "loans",
        method: "DELETE",
        body: { loanId },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Loans"],
    }),
  }),
});

export const {
  useGetLoansQuery,
  useGetTotalLoansQuery,
  useGetLoansByPersonQuery,
  useDeleteLoanMutation,
  useUpdateLoanMutation,
  useCreateLoanMutation,
} = loansApi;
export default loansApi;
