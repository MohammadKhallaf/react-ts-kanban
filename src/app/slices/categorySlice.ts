import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Task } from "./taskSlice";

export interface Category {
  id: number | string;
  boardId: number | string;
  title: string;
}
const initialState: Category[] = [
  { id: 1, boardId: 1, title: "new category" },
  { id: 2, boardId: 1, title: "new category" },
  { id: 3, boardId: 1, title: "new category" },
  { id: 4, boardId: 2, title: "new category" },
  { id: 5, boardId: 2, title: "new category" },
  { id: 6, boardId: 3, title: "new category" },
  { id: 7, boardId: 3, title: "new category" },
  { id: 8, boardId: 4, title: "new category" },
  { id: 9, boardId: 4, title: "new category" },
  { id: 10, boardId: 5, title: "new category" },
  { id: 11, boardId: 5, title: "new category" },
  { id: 12, boardId: 5, title: "new category" },
];

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    createCategory: {
      reducer: (state, { payload }: PayloadAction<Category>) => {
        state.push(payload);
      },
      prepare: (boardId, title = "new category") => {
        return {
          payload: { id: nanoid(), title, boardId } as Category,
        };
      },
    },
    updateCatogry: (
      state,
      action: PayloadAction<Partial<Category> & { id: number | string }>
    ) => {
      const CategoryIdx = state.findIndex(
        (category) => category.id === action.payload.id
      );

      state[CategoryIdx] = {
        ...state[CategoryIdx],
        ...action.payload,
      };
    },
    removeCategory: (state, { payload }) => {
      state.filter((category) => category.id !== payload.id);
    },
  },
});

export default categorySlice.reducer;
