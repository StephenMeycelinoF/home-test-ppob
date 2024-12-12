import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Home from "./pages/Home";
import Topup from "./pages/Topup";
import Transaction from "./pages/Transaction";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "topup", element: <Topup /> },
      { path: "transaction", element: <Transaction /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
];
