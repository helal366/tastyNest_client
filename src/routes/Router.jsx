import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import PrivateRoute from "../contexts-providers/PrivateRoute";
import Loading from "../components/Loading";
const  MainHomeLayout = lazy(()=>import("../layouts/MainHomeLayout"));
const  ErrorPage = lazy(()=>import("../errorPage/ErrorPage"));
const  Home = lazy(()=>import("../pages/Home"));
const  AllRecipes = lazy(()=>import("../pages/AllRecipes"));
const  AddRecipe = lazy(()=>import("../pages/AddRecipe"));
const  MyRecipe = lazy(()=>import("../pages/MyRecipe"));
const  AuthLayout = lazy(()=>import("../layouts/AuthLayout"));
const  Login = lazy(()=>import("../auth/Login"));
const  Register = lazy(()=>import("../auth/Register"));
const  SingleRecipePage = lazy(()=>import("../pages/SingleRecipePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading></Loading>}>
        <MainHomeLayout></MainHomeLayout>
      </Suspense>
    ),
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
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <ErrorPage></ErrorPage>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <Suspense fallback={<Loading></Loading>}>
        <AuthLayout></AuthLayout>
      </Suspense>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/auth/login",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Login></Login>
          </Suspense>
        ),
      },
      {
        path: "/auth/register",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Register></Register>
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <ErrorPage></ErrorPage>
          </Suspense>
        ),
      },
    ],
  },
]);
export default router;
