/**
 * Expose `ActionButton`.
 */

exports.ActionButton = ActionButton

/**
 * Create a new `ActionButton`.
 */

exports.actionButton = function(opts) {
  return new ActionButton(opts)
}

/**
 * Initialize a new `ActionButton`
 */

function ActionButton(opts) {
  events.EventEmitter.call(this)

  // grab from current scope if available
  this.template = template
  
  this.options = {target: '.right-buttons'}
  this.options = $.extend(this.options, opts)
}

/**
 * Inherit from EventEmitter
 */

util.inherits(ActionButton, events.EventEmitter)


/**
 * Render into HTML
 */

ActionButton.prototype.build = function() {
  return mustache.to_html(this.template, this.options)
}
