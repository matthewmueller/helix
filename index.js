/**
 * Module dependencies
 */

var classes = require('classes');

/**
 * Export `Helix`
 */

module.exports = create;

/**
 * Create `Helix`
 *
 * @param {DOMNode} el
 * @return {Function}
 * @api public
 */

function create(el) {
  return function(selector) {
    return new Helix(selector, el);
  };
}

/**
 * Initialize `Helix`
 *
 * @param {string} selector
 * @param {DOMNode} el
 * @return {Helix}
 * @api public
 */

function Helix(selector, el) {
  this.el = el.querySelector(selector);
  if (!this.el) throw new Error('cannot find ' + selector + ' selector');
  this.classes = classes(this.el);

  var attrs = this.el.attributes,
      attr;

  for (var i = 0, len = attrs.length; i < len; i++) {
    attr = attrs.item(i).name;
    this[attr] = this.setter(attr);
  }
}

/**
 * Get and set text
 *
 * @param {String} str
 * @return {Helix}
 * @api public
 */

Helix.prototype.text = function(str) {
  if (!str) return this.el.innerText;
  this.el.innerText = str;
  return this;
};

/**
 * Get and set HTML
 *
 *   $()
 *
 * @param {String} str
 * @return {Helix}
 * @api public
 */

Helix.prototype.html = function(str) {
  if (!str) return this.el.innerHTML;
  this.el.innerHTML = str;
  return this;
};

/**
 * Add class
 *
 * @param {String} cls
 * @return {Helix}
 * @api public
 */

Helix.prototype.addClass = function(cls) {
  this.classes(this.el).add(cls);
  return this;
};

/**
 * Remove class
 *
 * @param {String} cls
 * @return {Helix}
 * @api public
 */

Helix.prototype.removeClass = function(cls) {
  this.classes(this.el).remove(cls);
  return this;
};

/**
 * Toggle class
 *
 * @param {String} cls
 * @return {Helix}
 * @api public
 */

Helix.prototype.toggle = function(cls) {
  this.classes(this.el).toggle(cls);
  return this;
};


/**
 * Get and set attribute
 *
 * @param {String} attr
 * @param {Mixed} val
 * @return {Helix}
 * @api public
 */

Helix.prototype.attr = function(attr, val) {
  if (!val) return this.el.getAttribute(attr);
  this.el.setAttribute(attr, val);
  return this;
};

/**
 * Create setters to get and set attributes
 *
 * @param {String} name
 * @return {Function}
 * @api private
 */

Helix.prototype.setter = function(name) {
  return function(val) {
    if (!val) return this.el.getAttribute(name);
    this.el.setAttribute(name, val);
    return this;
  };
};
