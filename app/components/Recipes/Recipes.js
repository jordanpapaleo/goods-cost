import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import NewRecipe from './NewRecipe'

export default class Recipes extends Component {
  static get displayName () {
    return 'Recipes'
  }

  static propTypes () {
    return {
      dispatch: PropTypes.func
    }
  }

  static defaultProps () {
    return {}
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h2>Recipes</h2>
        <NewRecipe />
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.info('Recipes REDUX STATE', state)
  return {}
}

export default connect(mapStateToProps)(Recipes)
