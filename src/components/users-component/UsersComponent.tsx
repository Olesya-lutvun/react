import {useEffect, useState} from "react";

import { IUser} from "../../models/IUser.ts";
import { UserComponent } from "../user-component/UsersComponent.tsx";
import { getUsers } from "../../services/api.service.ts";
import { IUserResponse} from "../../models/IUserResponse.ts";
import { useSearchParams } from "react-router";

export const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: '1'})


    const [users, setUsers]= useState<IUser[]>([]);

    useEffect(() => {

       const currentPage = searchParams.get('page') || '1';
       getUsers(currentPage).then(({users}:IUserResponse) =>{

           setUsers(users);
       })

    }, [searchParams]);

    return(
        <div>
            {
                users.map((user: IUser) => (
                    <UserComponent user={user} key={user.id} />))
            }

        </div>
    );
};
