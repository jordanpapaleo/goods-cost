import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import recipe from './recipeReducer'
import ingredient from './ingredientReducer'

const reducers = combineReducers({
  ingredient,
  recipe,
  form: formReducer
})

export default reducers
