import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./LoginSlice";
import MarkerSlice from "./MarkerSlice";

export const store = configureStore({
	reducer: {
		isLoggedIn: loginSlice,
		allMarkers: MarkerSlice,
	},
});
