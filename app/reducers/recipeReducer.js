import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from 'constants/actionTypes'

export default function recipe (state = {}, action) {
  console.warn('Recipe reducer state:', state)
  console.warn('Recipe reducer action', action)

  switch (action.type) {
    case ADD_RECIPE:
      return Object.assign({}, state, {
        recipe: action.payload
      })
    case EDIT_RECIPE:
      return Object.assign({}, state, {
        recipe: action.paylaod
      })
    case DELETE_RECIPE:
      return Object.assign({}, state, {
        recipe: action.paylaod
      })
    default:
      return state
  }
}
