import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Task } from "./taskSlice";

export interface Category {
  id: number | string;
  boardId?: number | string;
  title: string;
}
const initialState: Category[] = [{ id: nanoid(), title: "new category" }];

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
