import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { item, count } = action.payload;
      const id = item?.card?.info?.id;

      const existingItem = state.items.find(i => i.card.info.id === id);
      
      if (existingItem) {
        existingItem.count = count;
      } else {
        state.items.push({ ...item, count });
      }
    },
    removeItems: (state, action) => {
      const { item } = action.payload;
      state.items = state.items.filter(i => i.card.info.id !== item.card.info.id);
    },
    clearItems: (state) => {
      state.items.length = 0;
    }
  },
});

export const { addItem, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
