import { createSlice } from "@reduxjs/toolkit";

// Load initial state from local storage if available
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("widgets");
    return serializedState ? JSON.parse(serializedState) : null;
  } catch (e) {
    console.warn("Could not load state", e);
    return null;
  }
};

const DashbordWidgetData = {
  categories: [
    {
      id: "01",
      label: 'CSPM',
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "01",
          name: "Widget A",
          description: "This is Widget A",
          category: "CSPM Executive Dashboard",
        },
        {
          id: "02",
          name: "Widget B",
          description: "This is Widget B",
          category: "CSPM Executive Dashboard",
        },
      ],
    },
    {
      id: "02",
      label: 'CWP',
      name: "CWP Executive Dashboard",
      widgets: [
        {
          id: "01",
          name: "Widget cwp A",
          description: "This is Widget A",
        },
        {
          id: "02",
          name: "Widget cwp B",
          description: "This is Widget B",
        },
      ],
    },
    {
      id: "03",
      label: 'Registry',
      name: "Registry Executive Dashboard",
      widgets: [
        {
          id: "01",
          name: "Widget Registery A",
          description: "This is Widget A",
        },
        {
          id: "02",
          name: "Widget Registery B",
          description: "This is Widget B",
        },
      ],
    },
  ],
};

const initialWidgetState = {
  widgets: loadState() || DashbordWidgetData,
};

const WidgetSlice = createSlice({
  name: "widget",
  initialState: initialWidgetState,
  reducers: {
    addWidget(state, action) {
      const { category, ...formData } = action.payload;
      const categoryObj = state.widgets.categories.find(cat => cat.name === category);
      if (categoryObj) {
        categoryObj.widgets.push(formData);
      }
      // Save updated state to local storage
      localStorage.setItem("widgets", JSON.stringify(state.widgets));
    },
    removeWidget(state, action) {
      const { categoryid, item } = action.payload;
      const category = state.widgets.categories.find(cat => cat.id === categoryid);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== item.id);
      }
      // Save updated state to local storage
      localStorage.setItem("widgets", JSON.stringify(state.widgets));
    },
  },
});

export const WidgetSliceActions = WidgetSlice.actions;
export default WidgetSlice.reducer;
