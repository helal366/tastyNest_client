import { createBrowserRouter } from "react-router";
import MainHomeLayout from "../layouts/MainHomeLayout";
import ErrorPage from "../errorPage/ErrorPage";
import Home from "../pages/Home";

const router=createBrowserRouter([
    {
        path: '/',
        element: <MainHomeLayout></MainHomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                element: <Home></Home>
                
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]

    }
]);
export default router;