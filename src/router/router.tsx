import App from '../App'
import {ComplexPage} from '../pages/ComplexPage'
import {ComentsPage} from '../pages/ComentsPage'
import {PostsPage} from '../pages/PostsPage'
import {UsersPage} from '../pages/UsersPage'
import {createBrowserRouter} from 'react-router'

export const routes = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {path: 'user', element: <UsersPage/>},
            {path: 'post', element: <PostsPage/>},
            {path: 'coments', element: <ComentsPage/>},
            {path: 'complex', element: <ComplexPage/>}
        ]

    }

])