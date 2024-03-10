import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    updateCart: (state, action) => {
      const data = action.payload;
      console.log(data);
      return [...state, data];
    },
  },
});

export const { updateCart } = cartSlice.actions;
export default cartSlice.reducer;
