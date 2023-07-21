import "./App.css";
import Expenses from "./pages/expenses";
import Home from "./pages/home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loans from "./pages/loans";
import Login from "./pages/login";
import Register from "./pages/register";

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
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
