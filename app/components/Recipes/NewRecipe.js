import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

class NewRecipe extends Component {
  static get displayName () {
    return 'NewRecipe'
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
      <div>NewRecipe</div>
    )
  }
}

export default reduxForm({
  form: 'new-recipe',
  fields: ['name', 'yeild', 'ingredients']
})(NewRecipe)
