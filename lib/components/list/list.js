/**
 * Expose `List`.
 */

exports.List = List

/**
 * Create a new `List`.
 */

exports.list = function(target) {
  return new List(target)
}

/**
 * Initialize a new `List`
 */

function List(target) {
  vk.ScrollArea.call(this, target)
  this.template = template
  this.items = []
}

/**
 * Inherit from ScrollArea
 */

util.inherits(List, vk.ScrollArea)

List.prototype.add = function(item) {
  this.items.push(item)
  this.render()
}

List.prototype.render = function() {
  var rendered = mustache.to_html(
    this.template,
    {items: this.items.map(function(item){ return item.data })},
    {itemTemplate: this.items[0].template}
  )
  this.el.html(rendered)
}
