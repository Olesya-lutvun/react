import { FC } from "react";

import { IPost } from "../../models/IPost";

interface PostComponentProps {
    post: IPost;
}

export const PostComponent: FC<PostComponentProps> = ({
    post,
}) =>{
    return(
        <div>{post.title}</div>
    )
};
