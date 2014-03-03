
/**
 * Module dependencies.
 */

var helix = require('helix'),
    should = require('chai').should();

describe('selector', function(){
  it('should throw error if missing', function(){
    // Work on a copy of the elements, to not modify for other tests
    var $ = helix(document.querySelector('.person').cloneNode(true));
    (function() { $('.missing') }).should.throw(Error);
  })

  it('should select correct element', function(){
    var $ = helix(document.querySelector('.person').cloneNode(true));
    (function() { $('.name') }).should.not.throw(Error);
    var el = $('.name').el;
    el.should.have.property('nodeType').with.valueOf(1);
    el.className.should.equal('name');
  })
})

describe('contents', function(){
  it('should return inner text', function(){
    var $ = helix(document.querySelector('.person').cloneNode(true));
    $('.name').text().should.equal('Matt');
  })

  it('should set inner text', function(){
    var $ = helix(document.querySelector('.person').cloneNode(true));
    $('.name').text('Harry');
    $('.name').text().should.equal('Harry');
  })

  it('should return inner HTML', function(){
    var $ = helix(document.querySelector('.person').cloneNode(true));
    $('a').html().should.equal('about');
  })

  it('should set inner HTML', function(){
    var $ = helix(document.querySelector('.person').cloneNode(true));
    $('a').html('<strong>lol</strong>');
    $('a').html().should.equal('<strong>lol</strong>');
  })
})

describe('attributes', function(){
  it('should return existing attribute value', function(){
    var $ = helix(document.querySelector('.person').cloneNode(true));
    $('a').href().should.equal('/about');
  })

  it('should change attribute value', function(){
    var $ = helix(document.querySelector('.person').cloneNode(true));
    $('a').href('/me');
    $('a').href().should.equal('/me');
  })

  it('should add new attribute', function(){
    var $ = helix(document.querySelector('.person').cloneNode(true));
    $('.name').attr('data-type', 'first');
    $('.name').attr('data-type').should.equal('first');
  })
})

describe('classes', function(){
  it('should add a new class', function(){
    var $ = helix(document.querySelector('.person').cloneNode(true));
    $('a').addClass('link');
    $('a').classes.contains('link').should.equal(true);
  })

  it('should remove a class', function(){
    var $ = helix(document.querySelector('body').cloneNode(true));
    $('div').classes.contains('person').should.equal(true);
    $('div').removeClass('person');
    $('div').classes.contains('person').should.equal(false);
  })

  it('should toggle a class', function(){
    var $ = helix(document.querySelector('body').cloneNode(true));
    $('div').classes.contains('person').should.equal(true);
    $('div').toggle('person');
    $('div').classes.contains('person').should.equal(false);
    $('div').toggle('person');
    $('div').classes.contains('person').should.equal(true);
  })
})
