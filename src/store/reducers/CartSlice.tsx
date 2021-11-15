import { createSlice } from "@reduxjs/toolkit";
import { ICartUnit } from "../../components/Goods-list/Goods-item/types";

interface Cart {
  cart: ICartUnit[];
  cartShow: boolean;
}

const initialState: Cart = {
  cart: [],
  cartShow: false,
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
    },
    onChangeValueInCart(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (action.payload.quantity === 0) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        state.cart[itemIndex].quantity = action.payload.quantity;
      }
    },
    deleteGoodInCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    showCart(state) {
      state.cartShow = !state.cartShow;
    },
  },
});

export default cartSlice.reducer;
