import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ContactMe from "../Pages/ContactMe/ContactMe";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/contactme", element: <ContactMe></ContactMe> },
    ],
  },
]);
