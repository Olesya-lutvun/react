import {useEffect} from "react";
import {IComment} from "../model/IComment";
import {commentAction} from "../slices/CommentSlice";
import {useAppDispatch, useAppSelector} from "../redux/store";


export const ComentsPage = () => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector((state) => state.commentStoreSlice.comments)
    useEffect(() => {

        dispatch(commentAction.loadComment())

    }, []);


    return (
        <>
            {comments.map((comments: IComment) => (<div key={comments.id}>{comments.name}</div>))}
        </>
    )
}