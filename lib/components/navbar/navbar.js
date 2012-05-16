/**
 * Expose `NavBar`.
 */

exports.NavBar = NavBar

/**
 * Create a new `NavBar`.
 */

exports.navBar = function(target) {
  return new NavBar(target)
}

/**
 * Initialize a new `NavBar`
 */

function NavBar(target) {
  events.EventEmitter.call(this)

  this.target = target
  this.items = []
}

/**
 * Inherit from EventEmitter
 */

util.inherits(NavBar, events.EventEmitter)


/**
 * Render into HTML
 */

NavBar.prototype.render = function() {
  var target = $(this.target)
  this.items.forEach(function(item) {
    target.append(item.build())
  })
}

/**
 * Add an item to this nav bar
 */

NavBar.prototype.add = function(item) {
  this.items.push(item)
  this.render()
}
