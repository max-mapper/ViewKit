/**
 * Expose `TopNav`.
 */

exports.TopNav = TopNav

/**
 * Create a new `TopNav`.
 */

exports.topNav = function(target) {
  return new TopNav(target)
}

/**
 * Initialize a new `TopNav`
 */

function TopNav(target) {
  events.EventEmitter.call(this)

  // grab from current scope if available
  this.template = template

  this.target = target
  this.items = []
}

/**
 * Inherit from EventEmitter
 */

util.inherits(TopNav, events.EventEmitter)


/**
 * Render into HTML
 */

TopNav.prototype.render = function() {
  var target = $(this.target)
  target.html(mustache.to_html(this.template))
  this.items.forEach(function(item) {
    target.find(item.options.target).append(item.build())
  })
}

/**
 * Add a menu item
 */

TopNav.prototype.add = function(button) {
  this.items.push(button)
  this.render()
}
