import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Movies from "../pages/Movies";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "/movies",
            element: <Movies />
        }
    ]
  },
]);
