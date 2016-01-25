import { Object as ParseObject } from 'parse'

export default class ParseClass extends ParseObject {
  constructor (parseClass, validations = {}, objectId) {
    super(parseClass)

    // TODO have a validation file with functions like isString() isEmail()
    this.validations = validations

    // Sets the reference to a parse class object
    if (objectId) {
      this.setParseId(objectId)
    }
  }

  setParseId (id) {
    if (id) {
      this.id = id
    }
  }

  setProp (key, val) {
    this.set(key, val)
    
    if (key && val && this._validate(key, val)) {

      // return this._save();
    }
  }

  setProps (props = {}) {
    for (const prop in props) {
      if (props.hasOwnProperty(prop)) {
        const key = prop
        const val = props[prop]

        /* TODO allow validation
        if (!this._validate(key, val)) {
          continue;
        }
        */

        this.set(key, val)
      }
    }

    // return this._save();
  }

  // Takes the parse attributes and logs them to the JS console
  log () {
    console.log('Attempting to log', this.className)

    if (this.toPlainObject && this.toPlainObject instanceof Function) {
      console.log('Parse Output: ', this.toPlainObject())
    } else {
      console.log('Not a loggable object')
    }
  }

  // Validates a kvp based on the validation object
  _validate (key, val) {
    let isValid = true

    if (!this.validations.hasOwnProperty(key)) {
      // First check: is it an accepted property in the Parse class
      console.warn('Not a valid property', key)
      isValid = false
    } else if (!this.validations[key](val)) {
      // Second Check: is the value an accepted value
      console.warn('Not a valid property value', key, val)
      isValid = false
    }

    return isValid
  }

  // Returns a ParsePromise
  _save () {
    // return;
    const self = this

    return this.save(null, {
      success(payload) {
        console.info('Event saved', payload);
        self.objectId = payload.objectId;
      },
      error(payload, error) {
        console.error('Failed to create new object', error);
      }
    })
  }
}
