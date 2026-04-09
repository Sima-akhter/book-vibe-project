import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePages from "../pages/homePages/HomePages";
import Books from "../pages/books/Books";
import ErrorPages from "../pages/errorPages/ErrorPages";
import BookDetails from "../pages/bookDetails/BookDetails";

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
      },
      {
        path:"/bookDetails/:id",
        element: <BookDetails></BookDetails>,
      },
    ],
    errorElement: <ErrorPages></ErrorPages>
  },
]);