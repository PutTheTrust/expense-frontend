import "./App.css";
import Expenses from "./pages/expenses";
import Home from "./pages/home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loans from "./pages/loans";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/expenses",
      element: <Expenses />,
    },
    {
      path: "/loans",
      element: <Loans />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
