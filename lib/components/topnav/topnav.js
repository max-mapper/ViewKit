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
  this.template = template
  vk.NavBar.apply(this, arguments)
}

/**
 * Inherit from NavBar
 */

util.inherits(TopNav, vk.NavBar)

/**
 * Render into HTML
 */

TopNav.prototype.render = function() {
  $(this.target).html(mustache.to_html(this.template))
  TopNav.super_.prototype.render.call(this)
}

/**
 * Add a menu item
 */

TopNav.prototype.add = function(button) {
  this.items.push(button)
  this.render()
}
