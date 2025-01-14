import { Outlet } from "react-router"
import { UsersComponent } from "../components/users-component/UsersComponent"

export const UsersPage = () => {
    console.log('test')
    return (
        <div className='users-page'>
            <Outlet/>
            <hr/>
            <UsersComponent/>
        </div>
);
};
