import { createBrowserRouter } from "react-router-dom";

// Pages
import Layout from "../layout/Layout";
import HomePage from "../pages/home/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../components/common/login/Login";
import PublicRoute from "./PublicRoute";
import MasterPage from "../pages/master/MasterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/users",
        element: <div>user</div>,
      },
      {
        path: "/masters",
        element:<MasterPage/>
      }
    ],
  },
  {
    path: "/login",
    element: <PublicRoute><Login/></PublicRoute>,
  },
]);

export default router;
