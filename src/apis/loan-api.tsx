import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const loansApi = createApi({
  reducerPath: "loanApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/",
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
  }),
});

export const {
  useGetLoansQuery,
  useGetLoansByPersonQuery,
  useCreateLoanMutation,
} = loansApi;
export default loansApi;
