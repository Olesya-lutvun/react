///створюємо точки - роути///

import {createBrowserRouter} from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { AuthResourcesPage } from "../pages/AuthResourcesPage";

export const routes = createBrowserRouter([
    {
        path: '/', element:<MainLayout/>, children:[
            {index:true, element:<HomePage/>}, ///початковий шлях для батьківськоі урли///
            {path:'login', element: <LoginPage/>}, ///для логінаціі///
            //
            {path:'/auth/resources', element: <AuthResourcesPage/>}
        ]

    }
]);