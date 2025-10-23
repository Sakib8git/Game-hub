import { createBrowserRouter } from "react-router";

import RootLayoyt from "../Main/RootLayoyt";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotPassword from "../Pages/ForgotPassword";
import AllGames from "../Pages/AllGames";
import GameDetails from "../Pages/GameDetails";
import ErrorPage from "../Pages/ErrorPage";
import EditProfile from "../Pages/EditProfile";
import Leaderboard from "../Pages/Leaderboard";

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
        path: "/leaderboard",
        Component: Leaderboard,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/my-profile",
        Component: EditProfile,
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
      {
        path: "/games/:id", // ✅ dynamic route
        Component: GameDetails,
        loader: () => fetch("/gameData.json"), // সব data load হবে, তারপর filter করব
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
