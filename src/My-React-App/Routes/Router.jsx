import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import Cart from "../Pages/DashBoard/User/Cart";
import AddItems from "../Pages/DashBoard/Admin/addItems";

// import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUsers";
// import AdminRoute from "./AdminRoute";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
           {
             path : '/',
             element : <Home></Home>
           },
           {
            path : 'menu',
            element : <Menu></Menu>
           },
           {
            path : 'shop/:catagory',
            element  : <Shop></Shop>
           },
           {
            path : 'login',
            element : <Login></Login>
           },
          {
            path : 'SignUp',
            element : <SignUp></SignUp>
          }

          

      ]
    },
    {
      path : 'dashboard',
      element : <DashboardLayout></DashboardLayout>,
        children : [
          {
            path : 'cart',
            element  : <Cart></Cart>
          },
          {
            path : 'addItems',
            element  : <AddItems></AddItems>
          }
          // {
          //   path : 'allUsers',
          //   element :
          //    <AdminRoute>
          //     <AllUsers></AllUsers>
          //   </AdminRoute>,
          // }
        ]
    }
  ]);

  export default router;