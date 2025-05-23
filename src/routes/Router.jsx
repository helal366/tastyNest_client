import { createBrowserRouter } from "react-router";
import MainHomeLayout from "../layouts/MainHomeLayout";
import ErrorPage from "../errorPage/ErrorPage";
import Home from "../pages/Home";
import AllRecipes from "../pages/AllRecipes";
import AddRecipe from "../pages/AddRecipe";
import MyRecipe from "../pages/MyRecipe";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../auth/Login";
import Register from "../auth/Register";
import PrivateRoute from "../contexts-providers/PrivateRoute";
import Loading from "../components/Loading";
import SingleRecipePage from "../pages/SingleRecipePage";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHomeLayout></MainHomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Home></Home>
          </Suspense>
        ),
        loader: () => fetch(`https://server-tasty-nest.vercel.app/top-recipes`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/all-recipes",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <AllRecipes></AllRecipes>
          </Suspense>
        ),
      },
      {
        path: "/add-recipe",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading></Loading>}>
              <AddRecipe></AddRecipe>
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-recipe",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading></Loading>}>
              <MyRecipe></MyRecipe>
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/single-recipe-page/:id",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading></Loading>}>
              <SingleRecipePage></SingleRecipePage>
            </Suspense>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-tasty-nest.vercel.app/recipes/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
export default router;
