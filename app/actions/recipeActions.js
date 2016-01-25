import ParseClass from 'ParseClass'
import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from 'constants/actionTypes'
import { RECIPE } from 'constants/parseTypes'

export function addRecipe (recipe) {
  console.warn('Action addRecipe', ADD_RECIPE, recipe)

  const Recipe = new ParseClass(RECIPE)
  Recipe.setProps(recipe)
  Recipe.save().then((parseObject) => {
    console.info('SAVING', parseObject)
    const action = {
      type: ADD_RECIPE,
      payload: recipe
    }

    return action

    // dispatch(action)
  },
  (error) => {
    console.info('ERROR')
    const action = {
      type: ADD_RECIPE,
      payload: error,
      error: true
    }

    return action

    // dispatch(action)
  })

  return {
    type: ADD_RECIPE,
    payload: recipe
  }

  /* async
  return dispatch => {
    dispatch({
      type: ADD_RECIPE,
      payload: { recipe }
    })
  }*/
}

export function editRecipe (recipe) {
  return {
    type: EDIT_RECIPE,
    payload: { recipe }
  }
}

export function deleteRecipe (recipe) {
  return {
    type: DELETE_RECIPE,
    payload: { recipe }
  }
}
