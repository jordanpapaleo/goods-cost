import { ADD_INGREDIENT, EDIT_INGREDIENT, DELETE_INGREDIENT } from 'constants/actionTypes'

export default function ingredient (state = {}, action) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return Object.assign({}, state, {
        ingredient: action.paylaod.ingredient
      })
    case EDIT_INGREDIENT:
      return Object.assign({}, state, {
        ingredient: action.paylaod.ingredient
      })
    case DELETE_INGREDIENT:
      return Object.assign({}, state, {
        ingredient: action.paylaod.ingredient
      })
    default:
      return state
  }
}
