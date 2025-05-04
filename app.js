import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import { Menuschimmer, RestaurantMenu } from "./src/components/RestaurantMenu";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<Main/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
      path:"/about",
      element:<About/>
      },
      {
      path:"/contact",
      element:<Contact/>
    },{
      path:"/cart",
      element:<Cart/>
,    },{
      path : "/res/:resId",
      element:<RestaurantMenu/>
    }
    ],
    errorElement:<Error/>,
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>);
