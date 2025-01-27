import {useEffect} from "react";
import {IPost} from "../model/IPost";
import {postAction} from "../slices/PosrSlice";
import {useAppDispatch, useAppSelector} from "../redux/store";


export const PostsPage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postStoreSlice.posts)
  useEffect(() => {

    dispatch(postAction.loadPost())

  }, []);


  return (
      <>
        {posts.map((post: IPost) => (<div key={post.id}>{post.title}</div>))}
      </>
  )
}
