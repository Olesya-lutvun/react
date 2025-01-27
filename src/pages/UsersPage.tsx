import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userAction} from "../slices/UserSlice";
import {IUser} from "../model/IUser";

export const UsersPage = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userStoreSlice.users)
    useEffect(() => {

        dispatch(userAction.loadUsers())

    }, []);


    return (
        <>
            {users.map((user: IUser) => (<div key={user.id}>{user.name}</div>))}
        </>
    )
}