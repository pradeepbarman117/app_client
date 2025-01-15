// Desc: AppRoutes component

import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/home/HomePage";
import Login from "../components/common/login/Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import MasterPage from "../pages/master/MasterPage";


const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute><Layout /></PrivateRoute>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/masters',
        element: <MasterPage/>,
      },
    ]
  },
  {
    path: '/login',
    element: <PublicRoute><Login /></PublicRoute>,
  }
]);

export default AppRouter;