import {createBrowserRouter } from "react-router";

import { UsersPage } from "../pages/UsersPage";
import { MainLayout } from "../layaut/MainLayouyComponent";


export const routes = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout/>,children:[
            {path: 'users', element: <UsersPage/>},
        ]
    },
]);