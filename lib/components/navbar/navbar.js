/**
 * Expose `NavBar`.
 */

exports.NavBar = NavBar

/**
 * Create a new `NavBar`.
 */

exports.navBar = function(target, className) {
  return new NavBar(target, className)
}

/**
 * Initialize a new `NavBar`
 */

function NavBar(target, className) {
  // grab from global scope
  this.template = mustache.to_html(template, {className: className})
  $(target).html(template)
  events.EventEmitter.call(this)
  if (className) {
    this.className = className
  }
  this.target = target
  this.items = {
    left: [],
    right: []
  }
}

/**
 * Inherit from EventEmitter
 */

util.inherits(NavBar, events.EventEmitter)

/**
 * Injects into DOM
 */

NavBar.prototype.render = function() {
  var self = this
  var target = $(this.target)
  target.html(this.template)
  Object.keys(this.items).forEach(function(side) {
    var container = target.find('.' + side)
    container.append(self.build(side))    
  })
  
}

/**
 * returns new jQuery collection
 */

NavBar.prototype.build = function(side) {
  return this.items[side || 'left'].map(function(item) {
    return $(item.build())[0]
  })
}

/**
 * Add an item to this nav bar
 */

NavBar.prototype.add = function(item, side) {
  this.items[side || 'left'].push(item)
  this.render()
}
