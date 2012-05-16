/**
 * Expose `NavButton`.
 */

exports.NavButton = NavButton

/**
 * Create a new `NavButton`.
 */

exports.navButton = function(options) {
  return new NavButton(options)
}

/**
 * Initialize a new `NavButton`
 */

function NavButton(options) {
  vk.Button.apply(this, arguments)

  // grab from current scope if available
  this.template = template
}

/**
 * Inherit from EventEmitter
 */

util.inherits(NavButton, vk.Button)