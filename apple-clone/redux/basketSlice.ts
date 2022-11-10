import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface BasketState {
  items: Product[];
}

// Define the initial state using that type
const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToBasket: (state: BasketState, action: PayloadAction<Product>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (
      state: BasketState,
      action: PayloadAction<{ id: string }>
    ) => {
      const index = state.items.findIndex(
        (item: Product) => item._id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(
          `Can't remove product (id: ${action.payload.id}) as it is not in the basket.`
        );
      }

      state.items = newBasket;
    },
  },
});

//Action creators generated for each reducer functions
export const { addToBasket, removeFromBasket } = basketSlice.actions;

//selectors: retrieve items in state to use in different components
export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketItemsWithId = (state: RootState, id: string) => {
  state.basket.items.filter((item: Product) => item._id === id);
};

export const selectBasketTotal = (state: RootState) => {
  state.basket.items.reduce(
    (total: number, item: Product) => (total += item.price),
    0
  );
};

export default basketSlice.reducer;
