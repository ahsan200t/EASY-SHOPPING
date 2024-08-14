import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Contacts from "../Pages/Contacts";

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
        }
      ]
    },
  ]);