/**
 * Expose `List`.
 */

exports.List = List

/**
 * Create a new `List`.
 */

exports.list = function(target, className) {
  return new List(target, className)
}

/**
 * Initialize a new `List`
 */

function List(target, className) {
  events.EventEmitter.call(this, target)
  if (!className) className = "items"
  this.className = className
  this.template = template
  this.el = $(target)
  this.items = []
  this.makeCrossBrowserCompatible()
}

/**
 * Inherit from EventEmitter
 */

util.inherits(List, events.EventEmitter)

List.prototype.add = function(item) {
  var self = this
  if (!_.isArray(item)) item = [item]
  item.forEach(function(i) {
    self.items.push(i)
  })
  self.render()
}

List.prototype.render = function() {
  var rendered = mustache.to_html(
    this.template,
    {items: this.items.map(function(item){ return item.data }), className: this.className},
    {itemTemplate: this.items[0].template}
  )
  this.el.html(rendered)
  this.makeCrossBrowserCompatible()
}

List.prototype.makeCrossBrowserCompatible = function() {
  var scroller = this.el.find('.scroller')

  // see list.css for explanation of this one
  if (navigator.userAgent.match(/Android 2/i)) {
    this.el.css('overflow', 'scroll')
    scroller.css({'padding-bottom': '45px', 'overflow': 'scroll'})
  } else {
    scroller.parents().first().css({'bottom': '45px'})
  }

  if (navigator.userAgent.match(/iPhone OS 4/i)) {
    if (!$.fn.jScroll || !window.iScroll) return console.error('jScroll/iScroll missing')
    scroller.parents().first().jScroll()
  }
}
