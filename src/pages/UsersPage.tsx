import { PaginationComponent } from "../components/PaginationComponent";
import { UsersComponent } from "../components/users-component/UsersComponent"

export const UsersPage = () => {
    return (
        <>
            <UsersComponent/>
            <PaginationComponent/>
        </>
    );
};