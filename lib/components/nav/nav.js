
/**
 * Expose `Nav`.
 */

exports.Nav = Nav

/**
 * Create a new `Nav`.
 */

exports.nav = function(){
  return new Nav()
}

/**
 * Initialize a new `Nav`
 */

function Nav(front, back) {
  events.EventEmitter.call(this)

}

/**
 * Inherit from `Emitter.prototype`.
 */

util.inherits(Nav, events.EventEmitter)
