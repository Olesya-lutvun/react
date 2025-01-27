import {PayloadAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPost} from "../model/IPost";
import {getAll} from "../services/api.service";

type PostSliceType = {
    posts: IPost[]
}
const initPostSliceState: PostSliceType = {posts: []}

const loadPost = createAsyncThunk('loadPosts', async (_, thunkAPI) => {
    const posts = await getAll<IPost[]>('/posts');
    console.log(posts)
    return thunkAPI.fulfillWithValue(posts);

})


export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadPost.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        })
});
export const postAction = {...postSlice.actions, loadPost};