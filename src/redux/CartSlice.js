import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          path: newItem.path,
          price: newItem.price,
          quantity: 1,
          totalPrice: parseFloat(newItem.price),
        });
        state.totalQuantity++;
        state.totalAmount += parseFloat(newItem.price);
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += parseFloat(newItem.price);
        state.totalAmount += parseFloat(newItem.price);
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalAmount -= parseFloat(existingItem.totalPrice);
        state.totalQuantity -= existingItem.quantity;

        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += parseFloat(existingItem.price);
        state.totalAmount += parseFloat(existingItem.price);
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= parseFloat(existingItem.price);
        state.totalAmount -= parseFloat(existingItem.price);
      } else if (existingItem && existingItem.quantity === 1) {
        state.totalAmount -= parseFloat(existingItem.price);
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity--;
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
