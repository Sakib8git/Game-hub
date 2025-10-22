import { createBrowserRouter } from "react-router";

import RootLayoyt from "../Main/RootLayoyt";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotPassword from "../Pages/ForgotPassword";
import AllGames from "../Pages/AllGames";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayoyt,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/gameData.json"), // ✅ short form loader
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/forgot-password",
        Component: ForgotPassword,
      },
      {
        path: "/games",
        Component: AllGames,
        loader: () => fetch("/gameData.json"), // ✅ same short form
      },
    ],
  },
  {
    path: "/*",
    element: <h1>404</h1>,
  },
]);

export default router;