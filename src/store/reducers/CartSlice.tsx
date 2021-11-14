import { createSlice } from "@reduxjs/toolkit";
import { ICartUnit } from "../../App/components/Shop/Goods-list/Goods-unit/types";

interface Cart {
  cart: ICartUnit[];
  cartQuantity: number;
  sum: number;
}

const initialState: Cart = {
  cart: [],
  cartQuantity: 0,
  sum: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }

      state.sum += action.payload.price;
      state.cartQuantity = state.cart.reduce((a, b) => {
        return a + b.quantity;
      }, 0);
    },
    deleteFromCart(state, action) {
      state.cartQuantity -= action.payload.quantity;
      state.sum -= action.payload.price;
      state.cart = [...state.cart, action.payload.id];
    },
  },
});

export default cartSlice.reducer;
