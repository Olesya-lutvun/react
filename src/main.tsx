import {createRoot} from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux'
import {routes} from './router/router';
import {RouterProvider} from 'react-router';
import {store} from './redux/store';


createRoot(document.getElementById('root')!).render(<Provider store={store}>
        <RouterProvider router={routes}/>
    </Provider>
);
