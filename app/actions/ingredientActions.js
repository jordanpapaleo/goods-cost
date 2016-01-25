import { ADD_INGREDIENT, EDIT_INGREDIENT, DELETE_INGREDIENT } from 'constants/actionTypes'

export function addIngredient (ingredient) {
  return {
    type: ADD_INGREDIENT,
    payload: ingredient
  }
}

export function editIngredient (ingredient) {
  return {
    type: EDIT_INGREDIENT,
    payload: ingredient
  }
}

export function deleteIngredient (ingredient) {
  return {
    type: DELETE_INGREDIENT,
    payload: ingredient
  }
}
