
/**
 * @param {Array} fields
 * @param {String} value
 * @returns {Boolean}
 */
export default function checkFields(fields, value) {
  if (fields && fields instanceof Array && fields.length > 0) {
    return fields.indexOf(value) !== -1 || fields.indexOf('*') !== -1
  } else {
    return false
  }
}
