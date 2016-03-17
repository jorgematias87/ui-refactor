(function(){

  /* global module, inject */

  'use strict';

  describe('Factory: cssclass', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.landing'));

    var cssclass;

    beforeEach(inject(function($injector){

      cssclass = $injector.get('cssclass');

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
