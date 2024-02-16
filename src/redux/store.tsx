import { configureStore } from "@reduxjs/toolkit";
import { sliceMusicServices } from "./sliceMusicService";

const rootReducer = {
    sliceMusicServices: sliceMusicServices
};

const store = configureStore({
    reducer: rootReducer
});

export default store;