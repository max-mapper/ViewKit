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
  events.EventEmitter.call(this)

  // grab from current scope if available
  this.template = template
    
  this.options = options
}

/**
 * Inherit from EventEmitter
 */

util.inherits(NavButton, events.EventEmitter)


/**
 * Returns HTML representation of the button
 */

NavButton.prototype.build = function() {
  return mustache.to_html(this.template, this.options)
}
