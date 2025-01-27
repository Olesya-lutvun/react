import {PayloadAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../model/IUser";
import {getAll} from "../services/api.service";

type UserSliceType = {
    users: IUser[]
}
const initUserSliceState: UserSliceType = {users: []}


const loadUsers =
    createAsyncThunk("loadUser", async (_, thunkAPI) => {
        const users = await getAll<IUser[]>('/users')
        return thunkAPI.fulfillWithValue(users)

    });
export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initUserSliceState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        })
});
export const userAction = {...userSlice.actions, loadUsers};