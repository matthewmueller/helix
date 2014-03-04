
/**
 * Module dependencies.
 */

var helix = require('helix'),
    should = require('chai').should();

describe('Helix', function(){
  describe('Helix(selector)', function(){
    it('should throw an error if missing selector', function(){
      // Work on a copy of the elements, to not modify for other tests
      var $ = helix(document.querySelector('.person').cloneNode(true));
      (function() { $('.missing') }).should.throw(Error);
    })

    it('should select the correct element', function(){
      var $ = helix(document.querySelector('.person').cloneNode(true));
      (function() { $('.name') }).should.not.throw(Error);
      var el = $('.name').el;
      el.should.have.property('nodeType').with.valueOf(1);
      el.className.should.equal('name');
    })
  })

  describe('#text()', function(){
    it('should return inner text', function(){
      var $ = helix(document.querySelector('.person').cloneNode(true));
      $('.name').text().should.equal('Matt');
    })
  })

  describe('#text(val)', function(){
    it('should set inner text', function(){
      var $ = helix(document.querySelector('.person').cloneNode(true));
      $('.name').text('Harry');
      $('.name').text().should.equal('Harry');
    })
  })

  describe('#html()', function(){
    it('should return inner HTML', function(){
      var $ = helix(document.querySelector('.person').cloneNode(true));
      $('a').html().should.equal('about');
    })
  })

  describe('#html(val)', function(){
    it('should set inner HTML', function(){
      var $ = helix(document.querySelector('.person').cloneNode(true));
      $('a').html('<strong>lol</strong>');
      $('a').html().should.equal('<strong>lol</strong>');
    })
  })

  describe('#[attr]()', function(){
    it('should return existing attribute value', function(){
      var $ = helix(document.querySelector('.person').cloneNode(true));
      $('a').href().should.equal('/about');
    })
  })

  describe('#[attr](val)', function(){
    it('should change the attribute value', function(){
      var $ = helix(document.querySelector('.person').cloneNode(true));
      $('a').href('/me');
      $('a').href().should.equal('/me');
    })
  })

  describe('#attr(attr, val)', function(){
    it('should add a new attribute', function(){
      var $ = helix(document.querySelector('.person').cloneNode(true));
      $('.name').attr('data-type', 'first');
      $('.name').attr('data-type').should.equal('first');
    })
  })

  describe('#addClass()', function(){
    it('should add a new class', function(){
      var $ = helix(document.querySelector('.person').cloneNode(true));
      $('a').addClass('link');
      $('a').classes.contains('link').should.equal(true);
    })
  })

  describe('#removeClass()', function(){
    it('should remove a class', function(){
      var $ = helix(document.querySelector('body').cloneNode(true));
      $('div').classes.contains('person').should.equal(true);
      $('div').removeClass('person');
      $('div').classes.contains('person').should.equal(false);
    })
  })

  describe('#toggle()', function(){
    it('should toggle a class', function(){
      var $ = helix(document.querySelector('body').cloneNode(true));
      $('div').classes.contains('person').should.equal(true);
      $('div').toggle('person');
      $('div').classes.contains('person').should.equal(false);
      $('div').toggle('person');
      $('div').classes.contains('person').should.equal(true);
    })
  })
})
