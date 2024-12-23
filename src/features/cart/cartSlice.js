import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart: [],

  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload= newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    incItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  incItemQuantity,
  decItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export function getTotalCartPrice(state) {
  return state.cart.cart.reduce((sum, pizza) => sum + pizza.totalPrice, 0);
}

export function getTotalCartQuantity(state) {
  return state.cart.cart.reduce((sum, pizza) => sum + pizza.quantity, 0);
}

export function getCart(state) {
  return state.cart.cart;
}

export function getCurrentQuantityById(id) {
  return function (state) {
    return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
  };
}
