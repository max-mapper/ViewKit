/**
 * Expose `Item`.
 */

exports.Item = Item

/**
 * Create a new `Item`.
 */

exports.item = function(data) {
  return new Item(data)
}

/**
 * Initialize a new `Item`
 */

function Item(data) {
  this.data = data
  // grab from current scope if available
  this.template = template
}
