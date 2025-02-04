import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./../pages/Home";
import Layout from "./../layout/Layout";
import DesignTemplate from "../pages/Design-Template";
import CustomMockup from "./../pages/CustomMockup";
import FreeMockup from "./../pages/FreeMockup";
import BestSells from "./../pages/BestSells";
import Login from './../users/Login';
import Register from "../users/Register";

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
  ]);
  return <RouterProvider router={route} />;
};

export default Routes;
