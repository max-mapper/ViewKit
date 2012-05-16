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
  vk.NavBar.apply(this, arguments)
  $(this.target).addClass('bottomNav')
}

/**
 * Inherit from NavBar
 */

util.inherits(BottomNav, vk.NavBar)