import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Subtask {
  id: number | string;
  title: string;
}

export interface Task {
  id: number | string;
  title: string;
  description: string;
  category: string;
  subtasks: Subtask[];
}

export interface Category {
  id: number | string;
  title: string;
  tasks: Task[];
}
export interface Board {
  id: number | string;
  title: string;
  categories: Category[];
  createdAt: String;
}

export interface AppState {
  boards: Board[];
}
const initialState: AppState = {
  boards: [
    {
      id: nanoid(),
      title: "Planning",
      categories: [],
      createdAt: new Date().toISOString(),
    },
    {
      id: nanoid(),
      title: "Roadmap",
      categories: [],
      createdAt: new Date().toISOString(),
    },
    {
      id: nanoid(),
      title: "Management",
      categories: [],
      createdAt: new Date().toISOString(),
    },
  ],
};

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
      state.boards.push(newBoard());
    },
    updateBoard: (
      state,
      action: PayloadAction<Partial<Board> & { id: number | string }>
    ) => {
      const boardIdx = state.boards.findIndex(
        (board) => board.id === action.payload.id
      );

      state.boards[boardIdx] = {
        ...state.boards[boardIdx],
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
