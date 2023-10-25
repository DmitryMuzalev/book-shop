import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowNavMenu: false,
  isShowDropMenu: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleNavMenu(state) {
      state.isShowNavMenu = !state.isShowNavMenu;
    },
    disableNavMenu(state) {
      const { isShowNavMenu, isShowDropMenu } = state;
      if (isShowNavMenu) {
        state.isShowNavMenu = false;
        if (isShowDropMenu) {
          state.isShowDropMenu = false;
        }
      }
    },
    toggleDropMenu(state) {
      state.isShowDropMenu = !state.isShowDropMenu;
    },
    disableDropMenu(state) {
      if (state.isShowDropMenu) {
        state.isShowDropMenu = false;
      }
    },
  },
});

export const {
  toggleNavMenu,
  disableNavMenu,
  toggleDropMenu,
  disableDropMenu,
} = appSlice.actions;
export default appSlice.reducer;
