import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store"
import { userAction } from "../redux/slices/UserSlice";
import { postAction } from "../redux/slices/PosrSlice";
import { commentAction } from "../redux/slices/CommentSlice";

export const ComplexPage = () => {
    const dicpatch = useAppDispatch()
    const {
        commentStoreSlice: {comments},
        userStoreSlice: {users},
        postStoreSlice: {posts}
    } = useAppSelector(state => state)
    useEffect(() => {
        if (!users.length) {
            dicpatch(userAction.loadUsers());
        }
        if (!posts.length) {
            dicpatch(postAction.loadPost());
        }
        if (!comments.length) {
            dicpatch(commentAction.loadComment());
        }
    }, [users, posts, comments]);
    return (
        <></>
    )
}