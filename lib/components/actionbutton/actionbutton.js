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
  this.options = {target: '.right.buttons', className: 'action'}
  vk.Button.apply(this, arguments)
  // grab from current scope if available
  if (typeof template !== "undefined") this.template = template
}

/**
 * Inherit from Button
 */

util.inherits(ActionButton, vk.Button)