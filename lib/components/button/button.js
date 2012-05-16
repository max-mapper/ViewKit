/**
 * Expose `Button`
 */

exports.Button = Button

/**
 * Create a new `Button`
 */

exports.button = function(options) {
  return new Button(options)
}

/**
 * Initialize a new `Button`
 */

function Button(options) {
  events.EventEmitter.call(this)
  this.options = $.extend({}, this.options, options)
  // grab from current scope if available
  if (typeof template !== "undefined") this.template = template
}

/**
 * Inherit from EventEmitter
 */

util.inherits(Button, events.EventEmitter)


/**
 * Returns HTML representation of the button
 */

Button.prototype.build = function() {
  return mustache.to_html(this.template, this.options)
}
