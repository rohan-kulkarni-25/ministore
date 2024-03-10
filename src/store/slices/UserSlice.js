import { createSlice } from "@reduxjs/toolkit";

let initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      // {username,password}
      let data = action.payload;
      return {
        ...state,
        ...data,
      };
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
