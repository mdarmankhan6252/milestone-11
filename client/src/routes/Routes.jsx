import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AllJobs from "../pages/AllJobs/AllJobs";
import JobDetails from "../pages/Home/JobDetails";
import AddJob from "../pages/AddJobs/AddJob";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyBid from "../pages/myBid/MyBid";
import PostedJob from "../pages/postedJob/PostedJob";
import Update from "../pages/update/Update";

const router = createBrowserRouter([
   {
     path: "/",
     element: <Root/>,
     errorElement:<ErrorPage/>,
     children:[
      {
         index:true,
         element:<Home/>,
      },
      {
         path:'/login',
         element:<Login/>
      },
      {
         path:'/register',
         element:<Register/>
      },
      {
         path:'/allJobs',
         element:<AllJobs/>
      },
      {
         path:'job/:id',
         element:<JobDetails/>,
         loader:({params}) => fetch(`http://localhost:9000/job/${params.id}`)
      },
      {
         path:'/addJob',
         element:<AddJob/>
      },
      {
         path:'/myBid',
         element:<MyBid/>
      },
      {
         path:'/postedJob',
         element: <PostedJob/>
      },
      {
         path:'/update/:id',
         element:<Update/>,
         loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      }
     ]
   },
 ]);

export default router;