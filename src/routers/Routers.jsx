import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layouts/Main";
// import Home from "../pages/Home/Home/Home";
import Home from "../pages/Home/Category/Category";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";



  
 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        },
        {
          path: "/category/:id",
          element:<Category></Category>,
          // loader:({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        },
        
      ],
      
    },
    {
      path: "/",
      element:<NewsLayout></NewsLayout>,
      children:[
        // {
        //   path:":id",
        //   element:<News></News>,
        //   loader:({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        // }
      ]
    }
  ]);

  export default router;