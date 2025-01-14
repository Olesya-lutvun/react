import {createBrowserRouter } from "react-router";

import { CartsPage } from "../pages/CartsPage";
import { MainLayout } from "../layout/MainLayouyComponent";
import { UsersPage } from "../pages/UsersPage";


export const routes = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout/>,children:[
            {path: 'users', element: <UsersPage/>},
            {path:'user/:id/carts', element: <CartsPage/>}
        ]
    },
    ]);
