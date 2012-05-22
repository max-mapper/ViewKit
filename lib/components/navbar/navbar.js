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
 * Injects into DOM
 */

NavBar.prototype.render = function() {
  var target = $(this.target)
  target.html('')
  target.append(this.build())
}

/**
 * returns new jQuery collection
 */

NavBar.prototype.build = function() {
  var output = []
  this.items.forEach(function(item) {
    output.push($(item.build())[0])
  })
  return output
}

/**
 * Add an item to this nav bar
 */

NavBar.prototype.add = function(item) {
  this.items.push(item)
  this.render()
}
