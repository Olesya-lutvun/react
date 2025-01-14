import { useNavigate } from "react-router";
import { IUser } from "../../models/IUser";
import { FC } from "react";

type Props ={
    user:IUser;
}

export const UserComponent: FC<Props>= ({user}) => {
    const navigation = useNavigate();
    const onButtonClikNavigate = () =>{
        navigation('/users/'+ user.id + '/carts/')
    }
    return <div className={"my-5"}>
        {user.username}:{user.email}

        <button className={"border-2"} onClick={onButtonClikNavigate}> clik me
        </button>
    </div>;
};
