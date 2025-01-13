import { Component, useEffect, useState } from "react";

import { IBaseReponseModel } from "../../models/IBaseReponseModel";
import { IPost } from "../../models/IPost";
import { getAll } from "../../servises/general.api.service";

class PostComponent extends Component<{ post: IPost; }> {
    public render() {
        return (<div> {this.props.post.title}</div>);
    }
}

export const PostsComponent = () => {
    const [posts, setPosts]= useState<IPost[]>([]);

    useEffect(() => {
        getAll<IBaseReponseModel & {posts: IPost[]}>('/posts').then(({ posts })=> setPosts(posts));
    }, []);

    return(
        <div>
            {
                posts.map((post: IPost) => (
                    <PostComponent key={post.id} post={post}/>
                ))
            }
        </div>
    );
};
