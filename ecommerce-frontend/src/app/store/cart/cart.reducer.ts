import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from './cart.actions';

export const initialState = {
  items: []
};

const _cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => ({
    ...state,
    items: [...state.items, product]
  })),
  on(removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter(item => item.id !== productId)
  }))
);

export function cartReducer(state: any, action: any) {
  return _cartReducer(state, action);
}
