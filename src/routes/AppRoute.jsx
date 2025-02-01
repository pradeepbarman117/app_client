import { createBrowserRouter } from "react-router-dom";

// Pages
import Layout from "../layout/Layout";
import HomePage from "../pages/home/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../components/common/login/Login";
import PublicRoute from "./PublicRoute";
import MasterPage from "../pages/master/MasterPage";
import MasterDetailsPage from "../pages/master/MasterDetailsPage";
import UserPage from "../pages/user/UserPage";
import MasterDetailsForm from "../components/master/details/forms/MasterDetailsForm";

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
        metaData:{
          title: "Home Page",
          description: "This is home page",
        }
      },
      {
        path: "/users",
        element: <div>user</div>,
      },
      {
        path: "/masters",
        element:<MasterPage/>,
        children:[
          {
            path: ":id",
            element: <MasterDetailsPage/>,
            children:[
              {
                path: "users",
                element: <UserPage/>,
              },
              {
                path: "overview",
                element:<MasterDetailsForm/>,
              }
            ]
          },
        ]
      },
    ],
  },
  {
    path: "/login",
    element: <PublicRoute><Login/></PublicRoute>,
  },
]);

export default router;
