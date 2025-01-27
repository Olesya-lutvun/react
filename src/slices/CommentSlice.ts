import {PayloadAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IComment} from "../model/IComment";
import {getAll} from "../services/api.service";

type CommentSliceType = {
    comments: IComment[]
}
const initCommentSliceState: CommentSliceType = {comments: []}

const loadComment = createAsyncThunk('loadComments', async (_, thunkAPI) => {
    const comments = await getAll<IComment[]>('/coments');
    console.log(comments)
    return thunkAPI.fulfillWithValue(comments);

})

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadComment.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload;
        })
});
export const commentAction = {...commentSlice.actions, loadComment};


