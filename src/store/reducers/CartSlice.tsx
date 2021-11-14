import { createSlice } from "@reduxjs/toolkit";

interface Cart {
  cart: {}[];
  isEmpty: boolean;
}

const initialState: Cart = {
  cart: [],
  isEmpty: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
