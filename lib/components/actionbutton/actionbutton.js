/**
 * Expose `ActionButton`.
 */

exports.ActionButton = ActionButton

/**
 * Create a new `ActionButton`.
 */

exports.actionButton = function(options) {
  return new ActionButton(options)
}

/**
 * Initialize a new `ActionButton`
 */

function ActionButton(options) {
  var defaults = {target: '.right.buttons', className: 'nav-button round action'}
  this.options = _.extend({}, defaults, options)
  vk.Button.call(this, this.options)
  // grab from current scope if available
  if (typeof template !== "undefined") this.template = template
}

/**
 * Inherit from Button
 */

util.inherits(ActionButton, vk.Button)