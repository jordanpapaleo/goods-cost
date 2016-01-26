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

    this.state = {}
    this.renderIngredients = this.renderIngredients.bind(this)
  }

  componentWillMount () {
    const self = this;
    const query = new Parse.Query('Ingredient')
    // query.equalTo('name', 'butter')
    query.ascending('name')
    query.find({
      success(results) {
        console.info('ingredient query', results)

        self.setState({
          ingredients: results
        })
      },
      error(error) {

      }
    });
  }

  componentWillReceiveProps (props) {
    console.info('CWRP', props)
  }

  seedIngredients() {
    const Ingredient = Parse.Object.extend('Ingredient')
    const ingredients = ['milk', 'flour', 'sugar', 'butter']
    const temp = []

    for (let i = 0, j = ingredients.length; i < j; i++) {
      const ingredient = new Ingredient()
      ingredient.set('name', ingredients[i])
      ingredient.set('price', 10)
      ingredient.save()
      temp.push(ingredient)
    }
  }

  onClick () {
    const Recipe = Parse.Object.extend('Recipe')
    const recipe = new Recipe()
    recipe.set('name', 'Gumbo')
    recipe.set('yeild', 10)

    // recipe.set('ingredients', temp)

    recipe.save(null, {
      success (payload) {
        console.info('Recipe saved', payload)
      },
      error (payload, error) {
        console.error('Failed to create new object', error)
      }
    })

    console.info('Name', recipe.get('name'))
  }

  render () {
    console.info('THIS.STATE', this.state)

    return (
      <div>
        <h1>Main</h1>
        <button onClick={ this.onClick.bind(this) }>Add Recipe</button>
        <button onClick={ this.seedIngredients.bind(this) }>Seed Ingredients</button>
        { (this.state.ingredients) ? this.renderIngredients() : null }
        <Ingredients />
        <Recipes />
      </div>
    )
  }

  renderIngredients() {
    const { ingredients } = this.state;

    return (
      <div>
        <h2>Your ingredients</h2>
        <ul>
          { ingredients.map((ingredient) => {
            return (
              <li>{ ingredient.get('name') } { ingredient.get('cost') }</li>
            )
          }) }
        </ul>
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
