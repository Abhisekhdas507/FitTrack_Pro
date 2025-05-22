import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    loginUser: JSON.parse(localStorage.getItem('fittrack_login')) || null,
    users : JSON.parse(localStorage.getItem("fittrack_users")) || [],
};

const progressSlice = createSlice({
    name: 'progress',
    initialState,
    reducers: {
        logWorkout: (state, action) => {
            const workout = action.payload;
            const workoutName = workout.name;

            const workoutProgress = {
                name: workoutName,
                date: new Date().toISOString()
            };

            const users = JSON.parse(localStorage.getItem("fittrack_users")) || [];

            if (!state.loginUser) {
                // alert("No user is logged in.");
                toast.error("No user is logged in.");
                return;
            }

            const updatedUsers = users.map((user) => {
                if (user.email === state.loginUser.email) {

                    const updatedWorkouts = user.workout ? [...user.workout, workoutProgress] : [workoutProgress];
                    return {
                        ...user,
                        workout: updatedWorkouts
                    };
                }
                return user;
            });

            localStorage.setItem("fittrack_users", JSON.stringify(updatedUsers));
            // alert("Add workout Data successfully!");
            toast.success("Profile updated successfully!");
        },
        
        resetProgress: (state) => {
            if (!state.loginUser) {
                // alert("No user is logged in.");
                toast.error("No user is logged in.");
                return;
            }
            // const users = JSON.parse(localStorage.getItem("fittrack_users")) || [];

            const updatedUsers = state.users.map((user) => {
                if (user.email === state.loginUser.email) {
                    const { activityLevel, dietaryPreference, fitnessGoal, medicalConditions, weight, workout, ...rest } = user;
                    return { ...rest };
                }
                return user;
            });

            localStorage.setItem("fittrack_users", JSON.stringify(updatedUsers));
            // alert("User data has been reset successfully!");
            toast.success("User data has been reset successfully!");
        },
    },
});

export const { logWorkout, resetProgress } = progressSlice.actions;
export default progressSlice.reducer;