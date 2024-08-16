import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Contacts from "../Pages/Contacts";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Root from "../layoute/Root";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
          path:'/',
          element:<Home/>,
          loader: () => fetch("http://localhost:5000/productsCount")
  
        },
        {
            path:'/products',
            element:<Products/>,
            loader: () => fetch("http://localhost:5000/products")
  
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