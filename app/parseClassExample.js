import ParseClass from './ParseClass'

export default function parseClass () {
  const validations = {
    attendeeCount (val) {
      return (typeof val === 'number' && val > 0)
    },
    contactEmail (val) {
      const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      return pattern.test(val)
    },
    contactPhone (val) {
      const pattern = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
      return pattern.test(val)
    },
    description (val) {
      return (typeof val === 'string' && val.length > 0)
    },
    headerImage (val) {
      console.log('NOT TESTED', val)
      return true
    },
    locationName (val) {
      return (typeof val === 'string' && val.length > 0)
    },
    locationAddress (val) {
      console.log('NOT TESTED', val)
      return true
    },
    name (val) {
      return (typeof val === 'string' && val.length > 0)
    },
    resource (val) {
      console.log('NOT TESTED', val)
      return true
    },
    resourceCost (val) {
      console.log('NOT TESTED', val)
      return true
    },
    startDate (val) {
      console.log('NOT TESTED', val)
      return true
    },
    time (val) {
      console.log('NOT TESTED', val)
      return true
    },
    type (val) {
      console.log('NOT TESTED', val)
      return true
    },
    user (val) {
      return (val instanceof Object && val.constructor.name === 'ParseUser')
    }
  }

  return new ParseClass('Event', validations)
}
