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
import PaymentPage from '../pages/payments/PaymentPage'
import MasterUserPage from "../pages/master/MasterUserPage";
import Transaction from "../components/transaction/Transaction";
import MasterTransaction from "../components/master/transaction/MasterTransaction";
import BetsPage from "../pages/bets/BetsPage";

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
        element: <UserPage/>,
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
                element: <MasterUserPage/>,
              },
              {
                path: "overview",
                element:<MasterDetailsForm/>,
              },
              {
                path: "transaction",
                element:<MasterTransaction/>,
              }
            ]
          },
        ]
      },
      {
        path: "/Payments",
        element: <PaymentPage/>,
      },
      {
        path: "/transactions",
        element: <Transaction/>,
      },
      {
        path:'/bets',
        element:<BetsPage/>
      }
    ],
  },
  {
    path: "/login",
    element: <PublicRoute><Login/></PublicRoute>,
  },
]);

export default router;
