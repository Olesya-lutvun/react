import { createBrowserRouter } from 'react-router';
import App from '../App';
import { CarsPage } from '../pages/CarsPage';
import { CreateCarPage } from '../pages/CreateCarPage';

export const routes = createBrowserRouter([

    {
        path: '/', element: <App/> , children:[
            {path: 'cars',element:<CarsPage/>},
            {path: 'cars/create',element:<CreateCarPage/>}
        ]
    }
]);

