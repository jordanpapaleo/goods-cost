// Ingredient data class
export default class Ingredient {
  constructor (name, cost) {
    if (name && typeof name === 'string') {
      this._name = name
    }

    if (cost && typeof cost === 'number') {
      this._cost = cost
    }
  }

  get cost () {
    return this._price
  }

  set cost (cost) {
    this._cost = cost
    return true
  }

  get name () {
    return this._name
  }

  set name (name) {
    this._name = name
    return true
  }
}
