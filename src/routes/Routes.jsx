import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePages from "../pages/homePages/HomePages";
import Books from "../pages/books/Books";
import ErrorPages from "../pages/errorPages/ErrorPages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePages></HomePages>
      },
      {
        path: "/books",
        element: <Books></Books>
      }
    ],
    errorElement: <ErrorPages></ErrorPages>
  },
]);