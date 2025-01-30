import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './../pages/Home';
import Layout from './../layout/Layout';

const Routes = () => {
    const route = createBrowserRouter([
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Home/>,
          }
        ]
      }
  ]);
  return <RouterProvider router={route} />;
};

export default Routes;
