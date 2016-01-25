import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { CUPS, TSP, TBS } from 'constants/measurements'

class NewIngredient extends Component {
  static get displayName () {
    return 'NewIngredient'
  }

  static propTypes () {
    return {
      dispatch: PropTypes.func
    }
  }

  constructor (props) {
    super(props)

    this.state = {}
  }

  changeName (e) {
    e.preventDefault()

    this.setState({
      name: e.currentTarget.value
    })
  }

  changeQuantity (e) {
    e.preventDefault()
    this.setState({
      quantity: e.currentTarget.value
    })
  }

  changeUnit (e) {
    e.preventDefault()
    this.setState({
      unit: e.currentTarget.value
    })
  }

  changeCost (e) {
    e.preventDefault()
    this.setState({
      cost: e.currentTarget.value
    })
  }

  render () {
    return (
      <div>
        <h3>Add Ingredient</h3>
        <form>
          <input type='text' name='name' value={ this.state.name } onChange={ this.changeName.bind(this) } placeholder='What did you get' /><br />
          <input type='string' name='unit' value={ this.state.unit } onChange={ this.changeUnit.bind(this) } placeholder='What units of is it measured in' /> <br />
          <input type='string' name='quantity' value={ this.state.quantity } onChange={ this.changeQuantity.bind(this) } placeholder='How many units did you get' /><br />
          <input type='number' name='price' value={ this.state.cost } onChange={ this.changeCost.bind(this) } placeholder='How much did it cost' /><br />
          <p>{ `I got ${this.state.quantity} ${this.state.unit} of ${this.state.name} for $${this.state.cost}` }</p>
          <button>Save</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'new-recipe',
  fields: ['name', 'cost', 'quantity', 'unit']
})(NewIngredient)
