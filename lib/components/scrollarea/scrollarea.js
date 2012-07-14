/**
 * Expose `ScrollArea`.
 */

exports.ScrollArea = ScrollArea

/**
 * Create a new `ScrollArea`.
 */

exports.scrollArea = function(target) {
  return new ScrollArea(target)
}

/**
 * Initialize a new `ScrollArea`
 */

function ScrollArea(target) {
  events.EventEmitter.call(this)

  // grab template from current scope
  this.el = $(template)
  
  $(target).html(this.el)
}

/**
 * Inherit from EventEmitter
 */

util.inherits(ScrollArea, events.EventEmitter)
