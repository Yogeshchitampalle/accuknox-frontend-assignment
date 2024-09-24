import { configureStore } from "@reduxjs/toolkit";
import DrawerActionsReducer from "./ui-slice/UI-slice";
import WidgetActionsReducer from "./widget-slice/Widget-slice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    // Reducer for managing drawer state
    Drawer: DrawerActionsReducer,
    // Reducer for managing widget state
    Widget: WidgetActionsReducer,
  },
});
