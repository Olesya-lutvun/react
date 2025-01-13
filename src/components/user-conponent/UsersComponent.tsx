import { Component, useEffect, useState } from "react";

import { getAll } from "../../servises/general.api.service";
import { IBaseReponseModel } from "../../models/IBaseReponseModel";
import { IUser} from "../../models/IUser.ts";

class UserComponent extends Component<{ user: IUser }> {
    public render() {
        return <div>{this.props.user.username}</div>;
    }
}

export const UsersComponent = () => {
    const [users, setUsers]= useState<IUser[]>([]);

    useEffect(() => {
        getAll<IBaseReponseModel & {users: IUser[]}>('/users').then(({ users })=> setUsers(users))
    }, []);

    return(
        <div>
            {
                users.map((user: IUser) => (
                    <UserComponent key={user.id} user={user}/>
                ))
            }
        </div>
    );
};
