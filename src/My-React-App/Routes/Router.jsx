import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";



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
           }
          

      ]
    },
  ]);

  export default router;