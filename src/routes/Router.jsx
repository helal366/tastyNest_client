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

const router=createBrowserRouter([
    {
        path: '/',
        element: <MainHomeLayout></MainHomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
                
            },
            {
                path:'/all-recipes',
                element: <AllRecipes></AllRecipes>
            },
            {
                path:'/add-recipe',
                element: <AddRecipe></AddRecipe>
            },
            {
                path:'/my-recipe',
                element: <MyRecipe></MyRecipe>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]

    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
            
        ]
    }
]);
export default router;