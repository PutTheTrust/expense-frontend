import "./App.css";
import Expenses from "./pages/expenses";
import Home from "./pages/home";

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router-dom";
import Loans from "./pages/loans";
import Login from "./pages/login";
import Register from "./pages/register";
import { useDispatch } from "react-redux";
import { saveUser } from "./store/slice/auth-slice";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, SetLoggedIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      dispatch(saveUser(user));
      SetLoggedIn(true);
    } else {
      SetLoggedIn(false);
      navigate("/login");
    }
  }, []);

  // if (token) {
  //   const user = jwtDecode(token);
  //   dispatch(saveUser(user));
  // } else {
  //   navigate("/login");
  // }

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/expenses",
  //     element: <Expenses />,
  //   },
  //   {
  //     path: "/loans",
  //     element: <Loans />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  // ]);
  // <RouterProvider router={router} />
  // if (!isLoggedIn) {
  //   navigate("/login");
  // }
  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
