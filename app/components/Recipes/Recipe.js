// Recipe data class

export default class Recipe {
  constructor (props) {
    if (props.name && typeof props.name === 'string') {
      this.name = props.name
    }

    if (props.yeild && typeof props.yeild === 'number') {
      this.yeild = props.yeild
    }

    if (props.ingredients && typeof ingredients instanceof Array) {
      this.ingredients = props.ingredients
    }
  }
}
