import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import College from "../Pages/College/College";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/Login/SignUp";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import Apply from "../Pages/Apply/Apply";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/colleges",
            element: <College></College>
        },
        {
            path: "/admission",
            element: <Admission></Admission>
        },
        {
            path: "/myCollege",
            element: <MyCollege></MyCollege>
        },
        {
            path: "/collegeDetail/:id",
            element: <CollegeDetails></CollegeDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/collegeDetail/${params.id}`)
        },
        {
            path: "/apply/:id",
            element: <Apply></Apply>,
            loader: ({params}) => fetch(`http://localhost:5000/collegeDetail/${params.id}`)
        },
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>
  }
]);

export default router;
