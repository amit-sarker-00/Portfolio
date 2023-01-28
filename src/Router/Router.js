import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import ContactMe from "../Pages/ContactMe/ContactMe";
import Home from "../Pages/Home/Home/Home";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      {
        path: "/project/:name",
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-side-chi.vercel.app/project/${params.name}`
          ),
      },
      { path: "/blogs", element: <Blogs></Blogs> },
    ],
  },
]);
