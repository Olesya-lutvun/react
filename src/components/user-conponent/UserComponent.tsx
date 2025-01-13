import { FC } from "react";

import { IUser } from "../../models/IUser"

interface UserComponentProps{
    user: IUser;
}

export const UserComponent: FC<UserComponentProps> = ({
    user,
}) =>{
    return (
        <div>{user.username}</div>
    );
};
