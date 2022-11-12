import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Modal {
  title: String;
  taskId: number | string;
  boardId: number | string;
  categoryId: number | string;
}
const initialState: Modal = {
  title: "new task",
  taskId: 0,
  boardId: 0,
  categoryId: 0,
};
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<Modal>) => {
      state = { ...action.payload };
      return state;
    },
  },
});
export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
