/**
 * Expose `Container`
 */

exports.Container = Container

/**
 * Create a new `Container`
 */

exports.container = function(options) {
  return new Container(options)
}

/**
 * Initialize a new `Container`
 */

function Container(options) {
  events.EventEmitter.call(this)
  this.options = $.extend({}, this.options, options)
  // grab from current scope if available
  if (typeof template !== "undefined") this.template = template
  if (!this.options.target) this.options.target = "body"
  $(this.options.target).addClass('vk-container')
  masseuse.listenForTouches(this.options.target)
}

/**
 * Inherit from EventEmitter
 */

util.inherits(Container, events.EventEmitter)