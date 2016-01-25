import React, { Component, PropTypes } from 'react'
import Parse from 'parse'
import { connect } from 'react-redux'
import Ingredients from 'components/Ingredients'
import Recipes from 'components/Recipes'
import { addRecipe } from 'actions/recipeActions'

export default class Main extends Component {
  static get displayName () {
    return 'Main'
  }

  static get propTypes () {
    return {
      dispatch: PropTypes.func,
      form: PropTypes.object,
      ingredient: PropTypes.object,
      recipe: PropTypes.object
    }
  }

  constructor (props) {
    super(props)
  }

  componentWillReceiveProps (props) {
    console.info('CWRP', props)
  }

  onClick () {
    const Ingredient = Parse.Object.extend('Ingredient')
    const Recipe = Parse.Object.extend('Recipe')
    const recipe = new Recipe()
    recipe.set('name', 'Gumbo')
    recipe.set('yeild', 10)

    const ingredients = ['milk', 'flour', 'sugar', 'butter']
    const temp = []

    for (let i = 0, j = ingredients.length; i < j; i++) {
      const ingredient = new Ingredient()
      ingredient.set('name', ingredients[i])
      ingredient.set('price', 10)
      ingredient.save()
      temp.push(ingredient)
    }

    recipe.set('ingredients', temp)

    recipe.save(null, {
      success (payload) {
        console.info('REcipe saved', payload)
      },
      error (payload, error) {
        console.error('Failed to create new object', error)
      }
    })

    console.info('Name', recipe.get('name'))

    /* console.warn('Dispatch addRecipe')
    this.props.dispatch(addRecipe({
      isRecipe: true
    })) */
  }

  render () {
    return (
      <div>
        <h1>Main</h1>
        <button onClick={ this.onClick.bind(this) }>Test</button>
        <Ingredients />
        <Recipes />
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.info('REDUX STATE', state)
  return {
    form: state.form,
    ingredient: state.ingredient,
    recipe: state.recipe
  }
}

export default connect(mapStateToProps)(Main)
