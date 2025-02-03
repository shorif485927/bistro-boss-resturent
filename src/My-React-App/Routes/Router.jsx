import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";



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
  ]);

  export default router;