import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./../pages/Home";
import Layout from "./../layout/Layout";
import DesignTemplate from "../pages/Design-Template";
import CustomMockup from "./../pages/CustomMockup";
import FreeMockup from "./../pages/FreeMockup";
import BestSells from "./../pages/BestSells";
import Login from './../users/Login';
import Register from "../users/Register";
import AdminDashBoard from "../layout/admin/AdminDashBoard";
import AdminProfile from './../layout/admin/AdminProfile';
import AddProduct from './../layout/admin/AddProduct';
import ManageProduct from './../layout/admin/ManageProduct';
import ManageOrder from './../layout/admin/ManageOrder';
import Transactions from './../layout/admin/Transactions';
import ManageUsers from './../layout/admin/ManageUsers';
import UserLayout from "../layout/UserLayout/UserLayout";
import UserDashboardBtn from "../pages/User-dashboard/UserDashboardBtn";

const Routes = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/design-templates",
          element: <DesignTemplate />,
        },
        {
          path: "/custom-mockup",
          element: <CustomMockup />,
        },
        {
          path: "/freemockup",
          element: <FreeMockup />,
        },
        {
          path: "/bestSells",
          element: <BestSells />,
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
      ],
    },
     {
      path: '/admin-dashboard',
      element: <AdminDashBoard />,
      children: [

        {
          path: 'admin-dashboard/profile',
          element: <AdminProfile/>
        },
        {
          path: 'admin-dashboard/add-product',
          element: <AddProduct/>
        },
        {
          path: 'admin-dashboard/manage-products',
          element: <ManageProduct/>
        },
        {
          path: 'admin-dashboard/order',
          element: <ManageOrder/>
        },
        {
          path: 'admin-dashboard/transaction-history',
          element: <Transactions/>
        },
        {
          path: 'admin-dashboard/manage-users',
          element: <ManageUsers/>
        },
        // user 
        {
          path: 'admin-dashboard/user-profile',
          element: <ManageUsers/>
        },
      ]
    },
    {
      path : '/user-dashboard',
      element : <UserLayout/>,
      children : [
        {
          path : '/user-dashboard/all',
          element : <UserDashboardBtn/>
        }
      ]
    }
  ]);
  return <RouterProvider router={route} />;
};

export default Routes;
