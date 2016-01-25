import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import NewIngredient from './NewIngredient'

class Ingredients extends Component {
  static get displayName () {
    return 'Ingredients'
  }

  static propTypes () {
    return {
      dispatch: PropTypes.func
    }
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h2>Ingredients</h2>
        <NewIngredient />
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.info('Ingredients REDUX STATE', state)
  return {}
}

export default connect(mapStateToProps)(Ingredients)
