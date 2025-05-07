import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./layouts/main-layout/MainLayout.jsx";
import IdentityLayout from "./layouts/identity-layout/IdentityLayout";
import Home from "./pages/main-pages/ِDashboard/Dashboard.jsx";
import Login from "./pages/identity-pages/login/Login";
import SignUp from "./pages/identity-pages/signUp/SignUp";
import NotFound from "./pages/NotFound";
import Courses from "./pages/main-pages/courses/Courses.jsx";
import Dashboard from "./pages/main-pages/ِDashboard/Dashboard.jsx";
import Demo1 from "./pages/main-pages/ِDashboard/Demo1.jsx";
import Demo2 from "./pages/main-pages/ِDashboard/Demo2.jsx";


const isAuthunticated = () => {
  return localStorage.getItem("token") !== null
}

function ProtectedRoute({ element }) {
  return isAuthunticated() ? element : <Navigate to="/login" />
}


export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<MainLayout />} />,
    children: [
      {
        // element: <Dashboard />,
        children: [
          {
            element: <Demo1 />,
            path: 'demo1'
          },
          {
            element: <Demo2 />,
            path: 'demo2'
          }
        ]
      },
      {
        element: <Courses />,
        path: "/courses",
      },

    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      // {
      //   element: <SignUp />,
      //   path: "/signup",
      // },
    ],
  },
  { element: <NotFound />, path: "*" },
]);