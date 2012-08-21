/**
 * Expose `Container`
 */

exports.Container = Container

/**
 * Create a new `Container`
 */

exports.container = function(target) {
  return new Container(target)
}

/**
 * Initialize a new `Container`
 */

function Container(target) {
  var self = this
  events.EventEmitter.call(this)
  // grab from current scope if available
  if (typeof template !== "undefined") this.template = template
  if (!target) target = "body"
  this.target = target
  $(this.target).addClass('vk-container')
  function onModal(route) { self.emit('modal', route) }
  masseuse.listenForTouches(onModal, this.target)
}

/**
 * Inherit from EventEmitter
 */

util.inherits(Container, events.EventEmitter)