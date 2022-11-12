/** Slice for the site layout
 * - side drawer
 * - dark / light mode
 * - navbar title
 * - task add {board related}
 */

import { createSlice } from "@reduxjs/toolkit";
import type { Board } from "./boardSlice";

let browser = window.matchMedia("(prefers-color-scheme: dark)");
let storageDark = localStorage.getItem("darkMode");

function setAppTheme(darkState: boolean) {
  console.log(storageDark);
  document.documentElement.setAttribute(
    "data-mode",
    darkState ? "dark" : "light"
  );
  document.documentElement.setAttribute(
    "data-theme",
    darkState ? "dark" : "light"
  );
  localStorage.setItem("darkMode", darkState ? "dark" : "light");
}
setAppTheme(storageDark ? storageDark == "dark" : browser.matches);

export interface layout {
  board: Partial<Board> & { id: number | string; title: string };
  dark: boolean;
}

const initialState: layout = {
  board: {
    id: 0,
    title: "new board",
  },
  dark: storageDark ? storageDark == "dark" : browser.matches,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleDark: (state) => {
      state.dark = !state.dark;
      setAppTheme(state.dark);
    },
    setBoard: (state, action) => {
      state.board = action.payload;
    },
  },
});
export const { setBoard, toggleDark } = layoutSlice.actions;
export default layoutSlice.reducer;
