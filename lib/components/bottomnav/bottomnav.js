/**
 * Expose `BottomNav`.
 */

exports.BottomNav = BottomNav

/**
 * Create a new `BottomNav`.
 */

exports.bottomNav = function(target) {
  return new BottomNav(target)
}

/**
 * Initialize a new `BottomNav`
 */

function BottomNav(target) {
  events.EventEmitter.call(this)

  this.target = target
  this.items = []
}

/**
 * Inherit from EventEmitter
 */

util.inherits(BottomNav, events.EventEmitter)


/**
 * Render into HTML
 */

BottomNav.prototype.render = function() {
  var target = $(this.target)
  target.addClass('bottomNav')
  this.items.forEach(function(item) {
    target.append(item.build())
  })
}

/**
 * Add a menu item
 */

BottomNav.prototype.add = function(button) {
  this.items.push(button)
  this.render()
}
