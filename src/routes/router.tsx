import {createBrowserRouter } from "react-router";

import { MainLayout } from "../layaut/MainLayouyComponent";
import { PaginationLayaut } from "../layaut/PaginationLayaut";
import { UsersPage } from "../pages/UsersPage";


export const routes = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout/>,children:[
            {path:'', element: <PaginationLayaut/>, children:[
                    {path:'users', element: <UsersPage/>}
                ]},
        ]
    },
]);