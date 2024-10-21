import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ product: any }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ productId: string }>()
);
