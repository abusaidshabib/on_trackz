import { createBrowserRouter } from "react-router-dom";
import AddSubject from "../../Dpages/AddSubject/AddSubject";
import Attendance from "../../Dpages/Attendance/Attendance";
import ClassRoom from "../../Dpages/ClassRoom/ClassRoom";
import SingleClass from "../../Dpages/ClassRoom/SingleClass";
import Dhome from "../../Dpages/Dhome/Dhome/Dhome";
import Login from "../../Dpages/Login/Login";
import Notice from "../../Dpages/Notice/Notice";
import Register from "../../Dpages/Register/Register";
import Student from "../../Dpages/Students/Student";
import TakeAttendance from "../../Dpages/TakeAttendance/TakeAttendance";
import Dashboard from "../../Layout/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/",
        element: <Dhome></Dhome>
      },
      {
        path: "/home",
        element: <Dhome></Dhome>
      },
      {
        path: "/attendance",
        element: <Attendance></Attendance>
      },
      {
        path: "/notice",
        element: <Notice></Notice>
      },
      {
        path: "/takeattendance",
        element: <TakeAttendance></TakeAttendance>
      },
      {
        path: "/classroom",
        element: <ClassRoom></ClassRoom>
      },
      {
        path: "/class/:id",
        element: <SingleClass></SingleClass>
      }
    ]
  }
  ,
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  }
])

export default router;