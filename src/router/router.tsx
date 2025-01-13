import {createBrowserRouter } from "react-router";

import { UsersPage } from "../pages/UsersPage";
import { CartsPage } from "../pages/CartsPage";
import { MainLayout } from "../layout/MainLayouyComponent";


export const routes = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path: "users",
                element: <UsersPage />,
                children:[
                {path:':id/carts', element:<CartsPage/>}
               ]
            },
        ]
    }
]);
