import { createSlice } from "@reduxjs/toolkit";

//Création du Initial State
const initialState = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    price: 9.99,
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    qty: 2,
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    price: 19.99,
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    qty: 1,
  },
  {
    id: 3,
    title: "Powder Canister",
    price: 14.99,
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
    qty: 3,
  },
  {
    id: 4,
    title: "Red Lipstick",
    price: 12.99,
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
    qty: 2,
  },
];

//Créer une slice avec Reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, image, qty } = action.payload;
      // Vérifie si l'article existe dans le panier
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        // Si l'article existe, mise à jour de la quantité
        existingItem.qty = qty;
      } else {
        // S'il n'exite pas, l'ajoute au panier
        state.push({ id, title, price, image, qty });
      }
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      return state.filter((item) => item.id !== cartId);
    },
    incrementQty: (state, action) => {
      const cartId = action.payload;
      const cartItem = state.find((item) => item.id === cartId);
      if (cartItem) {
        cartItem.qty += 1;
      }
    },
    decrementQty: (state, action) => {
      const cartId = action.payload;
      const cartItem = state.find((item) => item.id === cartId);
      if (cartItem && cartItem.qty > 1) {
        cartItem.qty -= 1;
      }
    },
    emptyCart: (state) => {
      return [];
    },
  },
});

//Export des reducers(actions)
export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
