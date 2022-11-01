import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import boardReducer from "./slices/boardSlice";
import categoryReducer from "./slices/categorySlice";
import layoutReducer from "./slices/layoutSlice";
import taskReducer from "./slices/taskSlice";

export const store = configureStore({
  reducer: {
    boards: boardReducer,
    categories: categoryReducer,
    tasks: taskReducer,
    layout: layoutReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
