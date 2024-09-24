import { createSlice } from "@reduxjs/toolkit";

// Initial UI state
const initialUiState = {
  isOpen: false,
  isOpenwid: false,
  widgets: [], // Added widgets array to store widget data
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState: initialUiState,
  reducers: {
    openDrawer: (state) => {
      state.isOpen = true;
    },
    closeDrawer: (state) => {
      state.isOpen = false;
    },
    toggleDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },
    toggleWidget: (state) => {
      state.isOpenwid = !state.isOpenwid;
    },
    addWidget: (state, action) => {
      state.widgets.push(action.payload);
    },
  },
});

export const DrawerActions = drawerSlice.actions;
export default drawerSlice.reducer;
