import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Home from "./pages/Home";
import Topup from "./pages/Topup";
import Transaction from "./pages/Transaction";

import Login from "./pages/Login";
import Register from "./pages/Register";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "topup", element: <Topup /> },
      { path: "transaction", element: <Transaction /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
];
