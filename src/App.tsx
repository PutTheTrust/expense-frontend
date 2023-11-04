import Expenses from "./pages/expenses";
import Home from "./pages/home";

import { Route, Routes, useNavigate } from "react-router-dom";
import Loans from "./pages/loans";
import Login from "./pages/login";
import Register from "./pages/register";
import { useDispatch } from "react-redux";
import { saveUser } from "./store/slice/auth-slice";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      dispatch(saveUser(user));
    } else {
      navigate("/login");
    }
  }, []);

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
