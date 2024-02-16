import { createSlice } from "@reduxjs/toolkit";


const initialState: any = [];

const reducerMusicServices = createSlice({
    name: 'userInfo',
    initialState: initialState,
    reducers: {
        getPlaylists: (state, action) => {
            console.log(action.payload)
            return state = action?.payload;
        },
    }
});

export const sliceMusicServices = reducerMusicServices.reducer;
export const { getPlaylists } = reducerMusicServices.actions;


