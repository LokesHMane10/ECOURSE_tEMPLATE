import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App";
import Homepage from "./Components/Homepage/Homepage";
import AboutUs from "./Components/about_us/aboutUs";
import Courses from "./Components/courses/Courses";
import Teachers from "./Components/teachers/Teachers";
import Blog from "./Components/blog/Blog";
import Signup from "./Components/signup/Signup";
// import App from './App.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/teachers",
    element: <Teachers />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Signup />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
