import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import workoutReducer from "./slices/workoutSlice";
import progressReducer from "./slices/progressSlice"


export const store = configureStore({
    reducer: {
        user: userReducer,
        workouts: workoutReducer,
        progress: progressReducer,
    },
});
