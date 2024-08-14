import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Contacts from "../Pages/Contacts";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children:[
        {
            path:'/products',
            element:<Products/>
        },
        {
            path:'/contacts',
            element:<Contacts/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/login',
          element:<Login/>
        }
      ]
    },
  ]);