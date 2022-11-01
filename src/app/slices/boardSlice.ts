import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Task } from "./taskSlice";
import { Category } from "./categorySlice";

export interface Board {
  id: number | string;
  title: string;
  createdAt: String;
}

export type AppState = Board[];

const initialState: AppState = [
  {
    id: nanoid(),
    title: "Planning",
    createdAt: new Date().toISOString(),
  },
  {
    id: nanoid(),
    title: "Roadmap",
    createdAt: new Date().toISOString(),
  },
  {
    id: nanoid(),
    title: "Management",
    createdAt: new Date().toISOString(),
  },
];

const newBoard = (title = "newboard") => ({
  id: nanoid(),
  title: title,
  categories: [],
  createdAt: new Date().toISOString(),
});

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    createBoard: (state) => {
      state.push(newBoard());
    },
    updateBoard: (
      state,
      action: PayloadAction<Partial<Board> & { id: number | string }>
    ) => {
      const boardIdx = state.findIndex(
        (board) => board.id === action.payload.id
      );

      state[boardIdx] = {
        ...state[boardIdx],
        ...action.payload,
      };
    },
  },
});
// export interface BoardState {
//   Categories:
// }

// const initialState: BoardState = {
//   value: 0,
// }

// export const counterSlice = createSlice({
//   name: 'board',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload
//     },
//   },
// })

// // Action creators are generated for each case reducer function
export const { createBoard, updateBoard } = boardSlice.actions;

export default boardSlice.reducer;
